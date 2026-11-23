import { describe, it, expect } from "vitest";
import "../src/nobreak-card";
import { CARD_NAME } from "../src/const";
import { computeState, resolveEntities, statusFlags } from "../src/nobreak-card";
import { ageParts, formatDuration } from "../src/helpers/resolve";
import type { HassObject, HassState, NobreakCardConfig } from "../src/types";

const NB = "dev-nobreak";
const NUT = "dev-nut";

type Opts = Record<string, string | undefined>;

/** Entities as registered on a real APC BZ1500XLBI-BR (pt-BR ids). */
function mockHass(o: Opts = {}): HassObject & { calls: unknown[][] } {
  const defs: Array<[string, string, string, string, string, Record<string, unknown>?]> = [
    ["sensor.nobreak_dados_do_status", NUT, "nut", "ups_status", o.status ?? "OL CHRG"],
    ["sensor.nobreak_carga_da_bateria", NUT, "nut", "battery_charge", o.charge ?? "85", { unit_of_measurement: "%" }],
    ["sensor.nobreak_duracao_da_bateria", NUT, "nut", "battery_runtime", "420", { unit_of_measurement: "s" }],
    ["sensor.nobreak_carregar", NUT, "nut", "ups_load", "25", { unit_of_measurement: "%" }],
    ["sensor.nobreak_potencia_real_nominal", NUT, "nut", "ups_realpower_nominal", "825"],
    ["sensor.nobreak_tensao_de_entrada", NUT, "nut", "input_voltage", "216"],
    ["sensor.nobreak_resultado_do_autoteste", NUT, "nut", "ups_test_result", o.test ?? "No test initiated"],
    ["binary_sensor.nobreak_rede_eletrica", NB, "nobreak", "rede_eletrica", o.utility ?? "on"],
    ["binary_sensor.nobreak_bateria_fraca", NB, "nobreak", "bateria_fraca", o.lb ?? "off"],
    ["binary_sensor.nobreak_carregando", NB, "nobreak", "carregando", "on"],
    ["binary_sensor.nobreak_sobrecarga", NB, "nobreak", "sobrecarga", o.over ?? "off"],
    ["binary_sensor.nobreak_desligamento_agendado", NB, "nobreak", "desligamento_agendado", o.fsd ?? "off"],
    ["sensor.nobreak_potencia_de_saida", NB, "nobreak", "potencia_de_saida", "206.2", { unit_of_measurement: "W" }],
    ["sensor.nobreak_quedas_de_energia", NB, "nobreak", "quedas_de_energia", "3"],
    ["sensor.nobreak_idade_da_bateria", NB, "nobreak", "idade_da_bateria", "462", { unit_of_measurement: "d" }],
    ["select.nobreak_sensibilidade", NB, "nobreak", "sensibilidade", "medium", { options: ["low", "medium", "high"] }],
    ["switch.nobreak_alarme_sonoro", NB, "nobreak", "alarme_sonoro", "off"],
    ["button.nobreak_autoteste_rapido", NB, "nobreak", "autoteste_rapido", "unknown"],
    ["button.nobreak_autoteste_completo", NB, "nobreak", "autoteste_completo", "unknown"],
    ["sensor.outro_nobreak_status", "other", "nut", "ups_status", "OB"],
  ];
  const states: Record<string, HassState> = {};
  const entities: NonNullable<HassObject["entities"]> = {};
  for (const [id, device, platform, tk, state, attributes = {}] of defs) {
    states[id] = { entity_id: id, state, attributes };
    entities[id] = { entity_id: id, platform, translation_key: tk, device_id: device };
  }
  const calls: unknown[][] = [];
  return {
    states,
    entities,
    devices: {
      [NB]: { id: NB, name: "Nobreak", via_device_id: NUT },
      [NUT]: { id: NUT, name: "Myups", name_by_user: "Nobreak" },
      other: { id: "other", name: "Outro" },
    },
    locale: { language: "pt-BR" },
    calls,
    callService: async (...args: unknown[]) => {
      calls.push(args);
    },
  };
}

const config: NobreakCardConfig = { type: `custom:${CARD_NAME}`, device: NB };

describe("resolveEntities", () => {
  it("finds nobreak and nut entities through via_device, ignoring other UPSes", () => {
    const e = resolveEntities(mockHass(), config);
    expect(e.status).toBe("sensor.nobreak_dados_do_status");
    expect(e.power).toBe("sensor.nobreak_potencia_de_saida");
    expect(e.quick_test).toBe("button.nobreak_autoteste_rapido");
    expect(Object.values(e)).not.toContain("sensor.outro_nobreak_status");
  });
  it("lets the config override an entity", () => {
    const e = resolveEntities(mockHass(), { ...config, entities: { charge: "sensor.x" } });
    expect(e.charge).toBe("sensor.x");
  });
});

describe("computeState", () => {
  const st = (o: Opts) => computeState(mockHass(o), resolveEntities(mockHass(o), config));
  it("maps NUT flags and nobreak binaries", () => {
    expect(st({})).toBe("charging");
    expect(st({ status: "OL" })).toBe("charging"); // carregando binary still on
    expect(st({ status: "OB DISCHRG", utility: "off" })).toBe("on_battery");
    expect(st({ status: "OB DISCHRG LB", utility: "off", lb: "on" })).toBe("low_battery");
    expect(st({ status: "OB", utility: "off", test: "In progress" })).toBe("testing");
    expect(st({ over: "on" })).toBe("overload");
    expect(st({ fsd: "on" })).toBe("shutdown");
    expect(st({ status: "unavailable", utility: "unavailable" })).toBe("unavailable");
  });
  it("parses status flags", () => {
    expect([...statusFlags("ol chrg")]).toEqual(["OL", "CHRG"]);
  });
});

describe("helpers", () => {
  it("formats durations and battery age", () => {
    expect(formatDuration(420)).toBe("7 min");
    expect(formatDuration(3900)).toBe("1 h 05 min");
    expect(ageParts(462)).toEqual([1, 3]);
  });
});

describe("card", () => {
  it("renders values and calls services", async () => {
    const el = document.createElement(CARD_NAME) as HTMLElement & { hass: HassObject; setConfig(c: NobreakCardConfig): void; updateComplete: Promise<unknown> };
    const hass = mockHass();
    el.setConfig(config);
    el.hass = hass;
    document.body.appendChild(el);
    await el.updateComplete;
    const text = el.shadowRoot!.textContent!.replace(/\s+/g, " ");
    expect(text).toContain("Carregando");
    expect(text).toContain("85%");
    expect(text).toContain("206 W");
    expect(text).toContain("1 a 3 m");
    expect(text).toContain("3 quedas");
    el.shadowRoot!.querySelector<HTMLButtonElement>(".toolbar .text-button")!.click();
    expect(hass.calls[0]).toEqual(["button", "press", { entity_id: "button.nobreak_autoteste_rapido" }]);
  });
});
