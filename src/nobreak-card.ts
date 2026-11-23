import { LitElement, html, nothing, svg, type PropertyValues, type TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ALERT_STATES, BATTERY_STATES, CARD_NAME, CARD_VERSION, PLATFORM, type EntityKey, type UpsState } from "./const";
import { ageParts, computeState, formatDuration, resolveEntities, toSeconds } from "./helpers/resolve";
import { localize, resolveLanguage } from "./localize";
import { cardStyles } from "./styles";
import type { HassObject, HassState, NobreakCardConfig, ResolvedEntities } from "./types";

export { computeState, resolveEntities, statusFlags } from "./helpers/resolve";

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

  private _entities: ResolvedEntities = {};

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
    if (changed.has("_config")) return true;
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

  private _toggleBeeper(): void {
    const beeper = this._state("beeper");
    if (!beeper || !this.hass) return;
    void this.hass.callService("switch", beeper.state === "on" ? "turn_off" : "turn_on", { entity_id: beeper.entity_id });
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
        ${this._renderToolbar(st)}
      </ha-card>
    `;
  }

  /** Wall outlet -> UPS tower (battery window) -> load, with the power flow animated per state. */
  private _renderHero(st: UpsState): Template {
    const charge = Math.max(0, Math.min(100, this._num("charge") ?? 0));
    const level = charge <= 25 ? "low" : charge <= 50 ? "mid" : "high";
    const fillH = (charge / 100) * 56;
    const power = this._num("power");
    const runtime = this._seconds("runtime");
    const onBattery = BATTERY_STATES.has(st);
    return html`<div class="hero ${st}" @click=${() => this._moreInfo("charge")}>
      <svg class="ups" viewBox="0 0 260 190" role="img" aria-label=${this._t(`status.${st}`)}>
        <!-- wall outlet -->
        <g class="outlet">
          <rect x="8" y="112" width="34" height="44" rx="7" />
          <rect class="slot" x="17" y="124" width="4" height="11" rx="1.5" />
          <rect class="slot" x="29" y="124" width="4" height="11" rx="1.5" />
          <circle class="slot" cx="25" cy="145" r="3" />
        </g>
        <!-- input cable -->
        <path class="cable" d="M 42 134 C 62 134 62 150 86 150" />
        <path class="flow in" d="M 42 134 C 62 134 62 150 86 150" />
        ${onBattery
          ? svg`<g class="cut"><line x1="58" y1="134" x2="68" y2="148" /><line x1="68" y1="134" x2="58" y2="148" /></g>`
          : nothing}
        <!-- output cable to the load -->
        <path class="cable" d="M 174 150 C 194 150 196 140 206 140" />
        <path class="flow out" d="M 174 150 C 194 150 196 140 206 140" />
        <!-- load (monitor) -->
        <g class="load">
          <rect x="206" y="110" width="46" height="32" rx="4" />
          <rect class="screen" x="210" y="114" width="38" height="24" rx="2" />
          <rect x="226" y="142" width="6" height="8" />
          <rect x="217" y="150" width="24" height="4" rx="2" />
        </g>
        <!-- UPS tower -->
        <g class="tower">
          <rect class="shadow" x="90" y="176" width="80" height="8" rx="4" />
          <rect class="body" x="86" y="14" width="88" height="164" rx="12" />
          <rect class="panel" x="96" y="24" width="68" height="44" rx="7" />
          <circle class="button" cx="130" cy="46" r="12" />
          <path class="button-glyph" d="M 130 39 L 130 46 M 124.5 41.5 A 7.5 7.5 0 1 0 135.5 41.5" />
          <circle class="led power" cx="106" cy="34" r="3" />
          <circle class="led battery" cx="154" cy="34" r="3" />
          <!-- battery window -->
          <rect class="battery-shell" x="108" y="84" width="44" height="64" rx="6" />
          <rect class="battery-cap" x="122" y="79" width="16" height="6" rx="2" />
          <clipPath id="nb-fill"><rect x="112" y="88" width="36" height="56" rx="3" /></clipPath>
          <g clip-path="url(#nb-fill)">
            <rect class="battery-fill ${level}" x="112" y=${144 - fillH} width="36" height=${fillH} />
          </g>
          <path class="bolt" d="M 133 98 L 122 118 L 130 118 L 126 136 L 139 113 L 131 113 Z" />
          <line class="vent" x1="100" y1="160" x2="160" y2="160" />
          <line class="vent" x1="100" y1="166" x2="160" y2="166" />
        </g>
      </svg>
      <span class="pill charge ${level}" title=${this._t("stat.battery")}>
        <ha-icon icon=${st === "charging" ? "mdi:battery-charging" : "mdi:battery"}></ha-icon>${Math.round(charge)}%
      </span>
      ${runtime !== null
        ? html`<span class="pill runtime ${onBattery ? "warn" : ""}"><ha-icon icon="mdi:timer-outline"></ha-icon>${formatDuration(runtime)}</span>`
        : nothing}
      ${power !== null
        ? html`<span class="pill power"><ha-icon icon="mdi:flash"></ha-icon>${this._number(power)} W</span>`
        : nothing}
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
    const energy = this._num("energy");
    return html`
      ${this._text("replace_battery") === "on" ? this._tip("replace_battery", "mdi:battery-alert", "tip.replace", this._t("tip.replace"), "alert") : nothing}
      ${this._text("avr") === "on" ? this._tip("avr", "mdi:sine-wave", "tip.avr", "AVR", "warn") : nothing}
      ${this._text("beeper") === "off" ? this._tip("beeper", "mdi:volume-off", "tip.beeper_off", "") : nothing}
      ${energy !== null ? this._tip("energy", "mdi:lightning-bolt", "tip.energy", `${this._number(energy, energy < 10 ? 2 : 1)} kWh`) : nothing}
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
    let sub = "";
    const utility = this._state("utility");
    if (BATTERY_STATES.has(st) && utility?.last_changed) sub = this._t("sub.since", { time: formatDuration((Date.now() - Date.parse(utility.last_changed)) / 1000) });
    return html`
      <div class="status ${st} ${ALERT_STATES.has(st) ? "alert" : ""}">
        ${st === "testing" ? html`<ha-spinner class="status-spinner" size="tiny"></ha-spinner>` : nothing}
        <span>${this._t(`status.${st}`)}</span>${sub ? html`<span class="sub">· ${sub}</span>` : nothing}
      </div>
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
    const runtime = this._seconds("runtime");
    const power = this._num("power");
    const load = this._num("load");
    const nominal = this._num("nominal_power");
    const voltage = this._num("input_voltage");
    const low = this._num("transfer_low");
    const high = this._num("transfer_high");
    const onBattery = BATTERY_STATES.has(st);
    const loadValue = power !== null ? `${this._number(power)} W` : load !== null ? `${Math.round(load)}%` : "—";
    const loadSub =
      load !== null && nominal !== null ? this._t("stat.of_nominal", { percent: Math.round(load), nominal: Math.round(nominal) }) : this._t("stat.load");
    return html`<div class="stats">
      ${this._block(
        "charge",
        charge === null ? "—" : `${Math.round(charge)}%`,
        runtime !== null ? this._t("stat.runtime", { time: formatDuration(runtime) }) : this._t("stat.battery"),
        charge !== null && charge <= 25 ? "bad" : ""
      )}
      ${this._block("power", loadValue, loadSub, load !== null && load >= 80 ? "bad" : "")}
      ${this._block(
        "input_voltage",
        onBattery ? this._t("stat.no_utility") : voltage === null ? "—" : `${Math.round(voltage)} V`,
        low !== null && high !== null ? this._t("stat.range", { low, high }) : this._t("stat.utility"),
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
          outages ? this._t("history.outages_n", { n: outages }) : this._t("history.no_outages"),
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
    return chips.length ? html`<div class="history">${chips}</div>` : nothing;
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
        ? this._iconButton(beeperOn ? "mdi:volume-high" : "mdi:volume-off", beeperOn ? "action.beeper_off" : "action.beeper_on", () => this._toggleBeeper())
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
  documentationURL: "https://github.com/hudsonbrendon/ha-card-nobreak",
  getEntitySuggestion: (hass: HassObject, entityId: string) => {
    const entry = hass.entities?.[entityId];
    if (!entry || entry.platform !== PLATFORM || !entry.device_id) return null;
    return { config: { type: `custom:${CARD_NAME}`, device: entry.device_id } };
  },
});
