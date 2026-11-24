import { LitElement, html, nothing, svg, type PropertyValues, type TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ALERT_STATES, BATTERY_STATES, CARD_NAME, CARD_VERSION, PLATFORM, type EntityKey, type UpsState } from "./const";
import { ageParts, buildGraph, computeState, formatDuration, polyline, resolveEntities, toSeconds } from "./helpers/resolve";
import { localize, resolveLanguage } from "./localize";
import { cardStyles } from "./styles";
import type { Graph, HassObject, HassState, HistoryResponse, NobreakCardConfig, ResolvedEntities } from "./types";

export { buildGraph, computeState, polyline, resolveEntities, statusFlags } from "./helpers/resolve";

const GRAPH_REFRESH_MS = 5 * 60_000;
const DAY_S = 86_400;

console.info(
  `%c NOBREAK-CARD %c v${CARD_VERSION} `,
  "color: white; background: #166534; font-weight: 700;",
  "color: white; background: #23272e; font-weight: 700;"
);

type Template = TemplateResult | typeof nothing;

const GONE = new Set(["unavailable", "unknown", ""]);

function fireEvent(node: HTMLElement, type: string, detail?: unknown): void {
  node.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));
}

@customElement(CARD_NAME)
export class NobreakCard extends LitElement {
  static styles = cardStyles;

  @property({ attribute: false }) public hass?: HassObject;
  @state() private _config!: NobreakCardConfig;

  @state() private _graph?: Graph;

  private _entities: ResolvedEntities = {};
  private _graphTimer?: number;
  private _graphFetched = 0;

  // ── HA card API ──────────────────────────────────────────────────────────
  static getStubConfig(hass?: HassObject): Partial<NobreakCardConfig> {
    const entry = Object.values(hass?.entities ?? {}).find(
      (e) => e.platform === PLATFORM && e.translation_key === "rede_eletrica" && e.device_id
    );
    return entry ? { type: `custom:${CARD_NAME}`, device: entry.device_id! } : { type: `custom:${CARD_NAME}` };
  }

  static getConfigForm() {
    return {
      schema: [
        { name: "device", selector: { device: { filter: [{ integration: PLATFORM }] } } },
        { name: "name", selector: { text: {} } },
        {
          type: "grid",
          name: "",
          schema: [
            { name: "show_name", selector: { boolean: {} } },
            { name: "show_status", selector: { boolean: {} } },
            { name: "show_history", selector: { boolean: {} } },
            { name: "show_graph", selector: { boolean: {} } },
            { name: "show_toolbar", selector: { boolean: {} } },
            { name: "compact_view", selector: { boolean: {} } },
          ],
        },
      ],
      computeLabel: (schema: { name: string }) => localize(`editor.${schema.name}`),
    };
  }

  public setConfig(config: NobreakCardConfig): void {
    if (!config) throw new Error(localize("common.invalid_config"));
    this._config = {
      show_name: true,
      show_status: true,
      show_history: true,
      show_graph: false,
      show_toolbar: true,
      compact_view: false,
      ...config,
    };
    this._entities = resolveEntities(this.hass, this._config);
  }

  public getCardSize(): number {
    return this._config?.compact_view ? 4 : 8;
  }

  public getGridOptions() {
    return this._config?.compact_view
      ? { columns: 6, rows: 4, min_columns: 4, min_rows: 3 }
      : { columns: 6, rows: 8, min_columns: 4, min_rows: 6 };
  }

  // ── lifecycle ────────────────────────────────────────────────────────────
  public connectedCallback(): void {
    super.connectedCallback();
    this._graphTimer = window.setInterval(() => void this._fetchGraph(), GRAPH_REFRESH_MS);
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    window.clearInterval(this._graphTimer);
  }

  protected updated(): void {
    if (!this._graphFetched && this.hass && this._entities.utility) void this._fetchGraph();
  }

  private async _fetchGraph(): Promise<void> {
    if (!this.hass?.callWS || !this._config?.show_graph || this._config.compact_view) return;
    const ids = { power: this._entities.power ?? this._entities.load, voltage: this._entities.input_voltage, utility: this._entities.utility };
    const entityIds = Object.values(ids).filter(Boolean) as string[];
    if (!entityIds.length) return;
    this._graphFetched = Date.now();
    const end = Date.now() / 1000;
    const start = end - DAY_S;
    try {
      const res = await this.hass.callWS<HistoryResponse>({
        type: "history/history_during_period",
        start_time: new Date(start * 1000).toISOString(),
        end_time: new Date(end * 1000).toISOString(),
        entity_ids: entityIds,
        minimal_response: true,
        no_attributes: true,
        significant_changes_only: false,
      });
      this._graph = buildGraph(res, ids, start, end);
    } catch {
      /* history not available: no graph */
    }
  }

  protected willUpdate(changed: PropertyValues): void {
    if (!changed.has("hass") || !this._config) return;
    const before = changed.get("hass") as HassObject | undefined;
    if (!before || before.entities !== this.hass?.entities || before.devices !== this.hass?.devices || !this._entities.utility) {
      this._entities = resolveEntities(this.hass, this._config);
    }
    if (!before || before.themes?.darkMode !== this.hass?.themes?.darkMode) {
      this.toggleAttribute("dark-mode", Boolean(this.hass?.themes?.darkMode));
    }
  }

  protected shouldUpdate(changed: PropertyValues): boolean {
    if (changed.has("_config") || changed.has("_graph")) return true;
    const before = changed.get("hass") as HassObject | undefined;
    if (!before || !this.hass) return true;
    return Object.values(this._entities).some((id) => id && before.states[id] !== this.hass!.states[id]);
  }

  // ── helpers ──────────────────────────────────────────────────────────────
  private get _lang(): string {
    return resolveLanguage(this.hass, this._config?.language);
  }

  private _t(key: string, vars?: Record<string, string | number>): string {
    return localize(key, this._lang, vars);
  }

  private _state(key: EntityKey): HassState | undefined {
    const id = this._entities[key];
    return id ? this.hass?.states[id] : undefined;
  }

  private _text(key: EntityKey): string | undefined {
    const s = this._state(key)?.state;
    return s === undefined || GONE.has(s) ? undefined : s;
  }

  private _num(key: EntityKey): number | null {
    const text = this._text(key);
    const value = Number(text);
    return text !== undefined && Number.isFinite(value) ? value : null;
  }

  private _seconds(key: EntityKey): number | null {
    const value = this._num(key);
    return value === null ? null : toSeconds(value, this._state(key)?.attributes.unit_of_measurement);
  }

  private _available(key: EntityKey): boolean {
    const s = this._state(key)?.state;
    return s !== undefined && s !== "unavailable";
  }

  private _number(value: number, digits = 0): string {
    return new Intl.NumberFormat(this._lang, { maximumFractionDigits: digits, minimumFractionDigits: digits }).format(value);
  }

  private _ago(iso: string): string {
    const diff = (Date.parse(iso) - Date.now()) / 1000;
    const rtf = new Intl.RelativeTimeFormat(this._lang, { numeric: "auto" });
    const abs = Math.abs(diff);
    if (abs < 3600) return rtf.format(Math.round(diff / 60), "minute");
    if (abs < 86400) return rtf.format(Math.round(diff / 3600), "hour");
    if (abs < 86400 * 45) return rtf.format(Math.round(diff / 86400), "day");
    if (abs < 86400 * 365) return rtf.format(Math.round(diff / (86400 * 30.44)), "month");
    return rtf.format(Math.round(diff / (86400 * 365.25)), "year");
  }

  private _moreInfo(key: EntityKey = "status"): void {
    const id = this._entities[key];
    if (id) fireEvent(this, "hass-more-info", { entityId: id });
  }

  private _press(key: EntityKey, confirmKey?: string): void {
    const id = this._entities[key];
    if (!id || !this.hass || (confirmKey && !window.confirm(this._t(confirmKey)))) return;
    void this.hass.callService("button", "press", { entity_id: id });
  }

  private _toggle(key: EntityKey): void {
    const entity = this._state(key);
    if (!entity || !this.hass) return;
    void this.hass.callService("switch", entity.state === "on" ? "turn_off" : "turn_on", { entity_id: entity.entity_id });
  }

  private _setSensitivity(option: string): void {
    const id = this._entities.sensitivity;
    if (id && this.hass) void this.hass.callService("select", "select_option", { entity_id: id, option });
  }

  // ── render ───────────────────────────────────────────────────────────────
  protected render(): Template {
    if (!this._config) return nothing;
    if (!this._config.device && !this._config.entities) {
      return html`<ha-card><div class="empty">${this._t("common.no_device")}</div></ha-card>`;
    }
    const st = computeState(this.hass, this._entities);
    const unavailable = st === "unavailable";
    return html`
      <ha-card>
        <div class="preview ${unavailable ? "not-available" : ""}">
          <div class="header">
            <div class="tips">${unavailable ? nothing : this._renderTips()}</div>
            <ha-icon-button class="more-info" .label=${this._t("common.more_info")} @click=${() => this._moreInfo()}>
              <ha-icon icon="mdi:dots-vertical"></ha-icon>
            </ha-icon-button>
          </div>
          ${this._config.compact_view ? nothing : this._renderHero(st)}
          <div class="metadata">${this._renderName()} ${this._renderStatus(st)}</div>
        </div>
        ${unavailable ? nothing : this._renderStats(st)}
        ${unavailable || !this._config.show_history || this._config.compact_view ? nothing : this._renderHistory()}
        ${unavailable || !this._config.show_graph || this._config.compact_view ? nothing : this._renderGraph()}
        ${this._renderToolbar(st)}
      </ha-card>
    `;
  }

  /**
   * APC Back-UPS BZ1500 standing, in the same oblique as the console cards
   * (front + depth vector to the upper right): glossy black front with the
   * power button and its LED ring, status LEDs and APC wordmark; the long side
   * with the vent grille; floor line. The ring and LEDs carry the state.
   */
  private _renderHero(st: UpsState): Template {
    // front 98..146 × 96..180 (150 × 240 mm), depth vector (104, -30) (360 mm)
    const [fx0, fx1, fy0, fy1, dx, dy] = [98, 146, 96, 180, 104, -30];
    const side = `M${fx1} ${fy0} L${fx1 + dx} ${fy0 + dy} V${fy1 + dy} L${fx1} ${fy1} Z`;
    const top = `M${fx0} ${fy0} L${fx1} ${fy0} L${fx1 + dx} ${fy0 + dy} L${fx0 + dx} ${fy0 + dy} Z`;
    const grille = Array.from({ length: 9 }, (_, k) => {
      const t = 0.22 + k * 0.07;
      const x = fx1 + dx * t;
      const y0 = fy0 + dy * t + 16;
      return svg`<line x1="${x.toFixed(1)}" y1="${y0.toFixed(1)}" x2="${x.toFixed(1)}" y2="${(y0 + 44).toFixed(1)}" class="slat" />`;
    });
    const alert = ALERT_STATES.has(st);
    return html`<div class="hero" @click=${() => this._moreInfo("charge")}>
      <svg class="art ups ${st}" viewBox="40 14 240 178" xmlns="http://www.w3.org/2000/svg" role="img" aria-label=${this._t(`status.${st}`)}>
        <line x1="64" y1="182" x2="256" y2="182" class="floor" />
        <path d="${top}" class="dark-top" />
        <path d="${side}" class="dark-side" />
        <path d="M${fx1} ${fy1 - 12} L${fx1 + dx} ${fy1 - 12 + dy} V${fy1 + dy} L${fx1} ${fy1} Z" class="dark-side-low" />
        <path d="M${fx1 + dx * 0.2} ${fy0 + dy * 0.2 + 12} L${fx1 + dx * 0.86} ${fy0 + dy * 0.86 + 12} V${fy0 + dy * 0.86 + 64} L${fx1 + dx * 0.2} ${fy0 + dy * 0.2 + 64} Z" class="grille-area" />
        ${grille}
        <text x="0" y="0" class="emboss" transform="translate(${fx1 + 56} ${fy0 - 1}) rotate(-16)">Back-UPS</text>
        <path d="M${fx0} ${fy0} H${fx1} V${fy1} H${fx0} Z" class="dark-front" />
        <path d="M${fx0 + 3} ${fy0 + 4} H${fx1 - 3} V${fy1 - 10} H${fx0 + 3} Z" class="gloss" />
        <path d="M${fx0 + 1.5} ${fy0 + 2} V${fy1 - 2}" class="shine" />
        <text x="${(fx0 + fx1) / 2}" y="${fy0 + 17}" class="wordmark" text-anchor="middle">APC</text>
        <circle cx="${(fx0 + fx1) / 2}" cy="${fy0 + 40}" r="9" class="ring" />
        <circle cx="${(fx0 + fx1) / 2}" cy="${fy0 + 40}" r="9" class="led-ring" />
        <circle cx="${(fx0 + fx1) / 2}" cy="${fy0 + 40}" r="6.2" class="chrome-button" />
        <path d="M${(fx0 + fx1) / 2} ${fy0 + 36.5} V${fy0 + 40} M${(fx0 + fx1) / 2 - 2.6} ${fy0 + 37.6} A3.6 3.6 0 1 0 ${(fx0 + fx1) / 2 + 2.6} ${fy0 + 37.6}" class="power-glyph" />
        <circle cx="${fx0 + 13}" cy="${fy0 + 58}" r="1.9" class="led led-utility" />
        <circle cx="${fx1 - 13}" cy="${fy0 + 58}" r="1.9" class="led led-battery" />
        <text x="${(fx0 + fx1) / 2}" y="${fy1 - 15}" class="wordmark small" text-anchor="middle">BZ1500</text>
        <rect x="${fx0 + 6}" y="${fy1 - 7}" width="${fx1 - fx0 - 12}" height="3" rx="1.5" class="foot" />
        <g class="bolt"><path d="M${fx1 + 70} ${fy0 - 56} l-9 15 h7 l-4 13 l12 -17 h-7 l5 -11 z" /></g>
        ${alert
          ? svg`<g class="warn-sign">
              <path d="M186 24 l12 20 h-24 z" />
              <rect x="184.8" y="30" width="2.4" height="7" rx="1" class="warn-glyph" />
              <circle cx="186" cy="40.5" r="1.4" class="warn-glyph" />
            </g>`
          : nothing}
      </svg>
    </div>`;
  }

  private _tip(key: EntityKey, icon: string, titleKey: string, value: string, cls = ""): Template {
    return html`
      <div class="tip ${cls}" title=${this._t(titleKey)} @click=${() => this._moreInfo(key)}>
        <ha-icon icon=${icon}></ha-icon><span>${value}</span>
      </div>
    `;
  }

  private _renderTips(): Template {
    const energy = this._num("energy_today") ?? this._num("energy");
    const cost = this._state("cost_today");
    const costText =
      cost && !GONE.has(cost.state) && Number.isFinite(Number(cost.state))
        ? new Intl.NumberFormat(this._lang, { style: "currency", currency: String(cost.attributes.unit_of_measurement ?? "BRL") }).format(Number(cost.state))
        : "";
    return html`
      ${this._text("replace_battery") === "on" ? this._tip("replace_battery", "mdi:battery-alert", "tip.replace", this._t("tip.replace"), "alert") : nothing}
      ${this._text("avr") === "on" ? this._tip("avr", "mdi:sine-wave", "tip.avr", "AVR", "warn") : nothing}
      ${this._text("beeper") === "off" ? this._tip("beeper", "mdi:volume-off", "tip.beeper_off", "") : nothing}
      ${energy !== null
        ? this._tip(
            this._entities.energy_today ? "energy_today" : "energy",
            "mdi:lightning-bolt",
            this._entities.energy_today ? "tip.energy_today" : "tip.energy",
            `${this._number(energy, energy < 10 ? 2 : 1)} kWh${costText ? ` · ${costText}` : ""}`
          )
        : nothing}
      ${this._text("firmware") ? this._tip("firmware", "mdi:chip", "tip.firmware", `FW ${this._text("firmware")!.replace(/^.*-(\d{6})$/, "$1")}`) : nothing}
    `;
  }

  private _renderName(): Template {
    if (!this._config.show_name) return nothing;
    const device = this._config.device ? this.hass?.devices?.[this._config.device] : undefined;
    const name = this._config.name ?? device?.name_by_user ?? device?.name ?? "Nobreak";
    return html`<div class="name">${name}</div>`;
  }

  private _renderStatus(st: UpsState): Template {
    if (!this._config.show_status) return nothing;
    const utility = this._state("utility");
    const real = this._num("real_runtime");
    const runtime = this._seconds("runtime");
    let detail = "";
    if (BATTERY_STATES.has(st) && utility?.last_changed) {
      detail = this._t("sub.on_battery_for", { time: formatDuration((Date.now() - Date.parse(utility.last_changed)) / 1000) });
      if (real !== null) detail += ` · ${this._t("stat.real_runtime", { time: formatDuration(real * 60) })}`;
    } else if (st !== "unavailable") {
      if (real !== null) detail = this._t("sub.real_runtime_full", { time: formatDuration(real * 60) });
      else if (runtime !== null) detail = this._t("sub.runtime", { time: formatDuration(runtime) });
    }
    return html`
      <div class="status ${st} ${ALERT_STATES.has(st) ? "alert" : ""}">
        ${st === "testing" ? html`<ha-spinner class="status-spinner" size="tiny"></ha-spinner>` : nothing}
        <span>${this._t(`status.${st}`)}</span>
      </div>
      ${detail ? html`<div class="detail">${detail}</div>` : nothing}
    `;
  }

  private _block(key: EntityKey, value: string, subtitle: string, cls = ""): Template {
    return html`<div class="stats-block" @click=${() => this._moreInfo(key)}>
      <div class="stats-value ${cls}">${value}</div>
      <div class="stats-subtitle">${subtitle}</div>
    </div>`;
  }

  private _renderStats(st: UpsState): Template {
    const charge = this._num("charge");
    const power = this._num("power");
    const load = this._num("load");
    const voltage = this._num("input_voltage");
    const low = this._num("transfer_low");
    const high = this._num("transfer_high");
    const onBattery = BATTERY_STATES.has(st);
    const loadValue = power !== null ? `${this._number(power)} W` : load !== null ? `${Math.round(load)}%` : "—";
    const loadSub = load !== null ? this._t("stat.power_load", { percent: Math.round(load) }) : this._t("stat.power");
    return html`<div class="stats">
      ${this._block(
        "charge",
        charge === null ? "—" : `${Math.round(charge)}%`,
        this._t("stat.battery"),
        charge !== null && charge <= 25 ? "bad" : ""
      )}
      ${this._block("power", loadValue, loadSub, load !== null && load >= 80 ? "bad" : "")}
      ${this._block(
        "input_voltage",
        onBattery ? this._t("stat.no_utility") : voltage === null ? "—" : `${Math.round(voltage)} V`,
        low !== null && high !== null ? this._t("stat.utility_range", { low, high }) : this._t("stat.utility"),
        onBattery ? "warn" : voltage !== null && low !== null && high !== null && (voltage <= low + 5 || voltage >= high - 5) ? "warn" : ""
      )}
    </div>`;
  }

  private _chip(key: EntityKey, icon: string, value: string, sub: string, cls = ""): Template {
    return html`<div class="chip ${cls}" @click=${() => this._moreInfo(key)}>
      <ha-icon icon=${icon}></ha-icon>
      <span class="chip-text">
        <span class="chip-value">${value}</span>
        <span class="chip-label">${sub}</span>
      </span>
    </div>`;
  }

  private _renderHistory(): Template {
    const outages = this._num("outages");
    const lastOutage = this._text("last_outage");
    const lastDuration = this._seconds("last_outage_duration");
    const batteryTime = this._seconds("battery_time");
    const lastTest = this._text("last_test");
    const result = this._state("last_test")?.attributes.resultado as string | undefined;
    const ageDays = this._num("battery_age");
    const chips: Template[] = [];
    if (outages !== null) {
      chips.push(
        this._chip(
          lastOutage ? "last_outage" : "outages",
          "mdi:transmission-tower-off",
          outages === 1 ? this._t("history.outage_1") : outages ? this._t("history.outages_n", { n: outages }) : this._t("history.no_outages"),
          lastOutage
            ? this._t("history.last_outage", { time: this._ago(lastOutage) }) + (lastDuration ? ` · ${formatDuration(lastDuration)}` : "")
            : this._t("history.outages")
        )
      );
    }
    if (batteryTime !== null) chips.push(this._chip("battery_time", "mdi:battery-clock", formatDuration(batteryTime), this._t("history.battery_time")));
    if (this._entities.last_test) {
      const passed = result?.startsWith("Done and passed");
      chips.push(
        this._chip(
          "last_test",
          passed ? "mdi:battery-check" : result ? "mdi:battery-alert" : "mdi:battery-unknown",
          lastTest ? this._ago(lastTest) : this._t("history.never"),
          result ? this._t("history.test_result", { result: this._t(`result.${result}`) }) : this._t("history.last_test"),
          result && !passed ? "warn" : ""
        )
      );
    }
    if (this._entities.battery_age || this._entities.battery_date) {
      let value = this._t("history.no_date");
      if (ageDays !== null) {
        const [y, m] = ageParts(ageDays);
        value = y ? this._t("history.age_value", { y, m }) : m ? this._t("history.age_months", { m }) : this._t("history.age_days", { d: ageDays });
      }
      chips.push(this._chip(this._entities.battery_date ? "battery_date" : "battery_age", "mdi:car-battery", value, this._t("history.age")));
    }
    if (this._entities.health) {
      const health = this._num("health");
      const real = this._num("real_runtime");
      chips.push(
        this._chip(
          "health",
          "mdi:battery-heart-variant",
          health === null ? this._t("history.not_measured") : `${Math.round(health)}%`,
          health === null ? this._t("history.health_pending") : real !== null ? this._t("history.health_runtime", { time: formatDuration(real * 60) }) : this._t("history.health"),
          health !== null && health < 60 ? "warn" : ""
        )
      );
    }
    if (this._entities.v_min || this._entities.out_of_range) {
      const lo = this._num("v_min");
      const hi = this._num("v_max");
      const out = this._seconds("out_of_range");
      chips.push(
        this._chip(
          "out_of_range",
          "mdi:sine-wave",
          lo !== null && hi !== null ? `${Math.round(lo)}–${Math.round(hi)} V` : "—",
          out ? this._t("history.grid_out", { time: formatDuration(out) }) : this._t("history.grid_ok"),
          out && out >= 600 ? "warn" : ""
        )
      );
    }
    return chips.length ? html`<div class="history">${chips}</div>` : nothing;
  }

  private _renderGraph(): Template {
    const g = this._graph;
    if (!g || (!g.power.length && !g.voltage.length)) return nothing;
    const W = 300;
    const H = 46;
    const x = (t: number) => ((t - g.start) / (g.end - g.start)) * W;
    const bands = g.outages.map(
      ([a, b]) => svg`<rect class="outage" x=${x(a)} y="0" width=${Math.max(1.5, x(b) - x(a))} height=${H}></rect>`
    );
    const range = (pts: Array<[number, number]>) => {
      const v = pts.map(([, n]) => n);
      return v.length ? [Math.min(...v), Math.max(...v)] : null;
    };
    const panel = (key: EntityKey, pts: Array<[number, number]>, cls: string, unit: string, labelKey: string) => {
      const r = range(pts);
      return html`<div class="graph" @click=${() => this._moreInfo(key)}>
        <div class="graph-head">
          <span>${this._t(labelKey)}</span>
          <span>${r ? `${this._number(r[0])}–${this._number(r[1])} ${unit}` : "—"}</span>
        </div>
        <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true">
          ${bands}
          <polyline class=${cls} points=${polyline(pts, g.start, g.end, W, H)}></polyline>
        </svg>
      </div>`;
    };
    return html`<div class="graphs">
      ${g.power.length ? panel(this._entities.power ? "power" : "load", g.power, "power", this._entities.power ? "W" : "%", "graph.power") : nothing}
      ${g.voltage.length ? panel("input_voltage", g.voltage, "voltage", "V", "graph.voltage") : nothing}
      <div class="graph-foot">
        <span>${this._t("graph.last_24h")}</span>
        ${g.outages.length ? html`<span class="legend"><i></i>${this._t(g.outages.length === 1 ? "graph.outage_1" : "graph.outages", { n: g.outages.length })}</span>` : nothing}
      </div>
    </div>`;
  }

  private _iconButton(icon: string, labelKey: string, action: () => void, cls = ""): TemplateResult {
    const label = this._t(labelKey);
    return html`
      <ha-icon-button class=${cls} .label=${label} title=${label} @click=${action}>
        <ha-icon icon=${icon}></ha-icon>
      </ha-icon-button>
    `;
  }

  private _textButton(icon: string, labelKey: string, action: () => void, cls = ""): TemplateResult {
    return html`<button class="text-button ${cls}" @click=${action}><ha-icon icon=${icon}></ha-icon>${this._t(labelKey)}</button>`;
  }

  private _renderSensitivity(): Template {
    const select = this._state("sensitivity");
    if (!select || GONE.has(select.state)) return nothing;
    const options = (select.attributes.options as string[] | undefined) ?? ["low", "medium", "high"];
    return html`
      <label class="select" title=${this._t("action.sensitivity")}>
        <ha-icon icon="mdi:tune-vertical"></ha-icon>
        <select @change=${(ev: Event) => this._setSensitivity((ev.target as HTMLSelectElement).value)}>
          ${options.map((o) => html`<option value=${o} ?selected=${o === select.state}>${this._t(`sensitivity.${o}`)}</option>`)}
        </select>
      </label>
    `;
  }

  private _renderToolbar(st: UpsState): Template {
    if (!this._config.show_toolbar || st === "unavailable") return nothing;
    const beeper = this._state("beeper");
    const beeperOn = beeper?.state === "on";
    let buttons: Template[];
    if (st === "shutdown" && this._available("cancel_shutdown")) {
      buttons = [this._textButton("mdi:power-plug", "action.cancel_shutdown", () => this._press("cancel_shutdown"), "danger")];
    } else if (st === "testing") {
      buttons = [this._available("stop_test") ? this._textButton("mdi:stop", "action.stop_test", () => this._press("stop_test"), "danger") : nothing];
    } else {
      buttons = [
        this._available("quick_test") ? this._textButton("mdi:battery-check", "action.quick_test", () => this._press("quick_test")) : nothing,
        this._available("deep_test") ? this._iconButton("mdi:battery-sync", "action.deep_test", () => this._press("deep_test", "action.confirm_deep")) : nothing,
        this._available("panel_test") ? this._iconButton("mdi:led-on", "action.panel_test", () => this._press("panel_test")) : nothing,
      ];
    }
    const extras = [
      beeperOn && BATTERY_STATES.has(st) && this._available("mute") ? this._iconButton("mdi:volume-mute", "action.mute", () => this._press("mute"), "active") : nothing,
      beeper && !GONE.has(beeper.state)
        ? this._iconButton(beeperOn ? "mdi:volume-high" : "mdi:volume-off", beeperOn ? "action.beeper_off" : "action.beeper_on", () => this._toggle("beeper"))
        : nothing,
      this._state("shedding") && !GONE.has(this._state("shedding")!.state)
        ? this._iconButton(
            this._state("shedding")!.state === "on" ? "mdi:leaf" : "mdi:leaf-off",
            this._state("shedding")!.state === "on" ? "action.shedding_off" : "action.shedding_on",
            () => this._toggle("shedding"),
            this._state("shedding")!.state === "on" ? "on" : ""
          )
        : nothing,
      this._renderSensitivity(),
    ];
    const all = [...buttons, ...extras].filter((b) => b !== nothing);
    return all.length ? html`<div class="toolbar">${all}</div>` : nothing;
  }
}

declare global {
  interface Window {
    customCards?: Array<Record<string, unknown>>;
  }
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: CARD_NAME,
  name: localize("common.name"),
  description: localize("common.description"),
  preview: true,
  documentationURL: "https://github.com/hudsonbrendon/nobreak-card",
  getEntitySuggestion: (hass: HassObject, entityId: string) => {
    const entry = hass.entities?.[entityId];
    if (!entry || entry.platform !== PLATFORM || !entry.device_id) return null;
    return { config: { type: `custom:${CARD_NAME}`, device: entry.device_id } };
  },
});
