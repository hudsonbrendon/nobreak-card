export const CARD_NAME = "nobreak-card";
export const CARD_VERSION = "2.2.0";

/** The card is built around the `nobreak` integration; `nut` supplies the live readings. */
export const PLATFORM = "nobreak";
export const PLATFORMS = ["nobreak", "nut"];

/**
 * Card key -> [domain, platform, translation_key]. `nobreak` entities live on
 * their own device, the `nut` ones on the device it is "connected via".
 */
export const KEYS = {
  // nut (core Network UPS Tools)
  status: ["sensor", "nut", "ups_status"],
  status_display: ["sensor", "nut", "ups_status_display"],
  charge: ["sensor", "nut", "battery_charge"],
  runtime: ["sensor", "nut", "battery_runtime"],
  load: ["sensor", "nut", "ups_load"],
  input_voltage: ["sensor", "nut", "input_voltage"],
  input_nominal: ["sensor", "nut", "input_voltage_nominal"],
  battery_voltage: ["sensor", "nut", "battery_voltage"],
  transfer_reason: ["sensor", "nut", "input_transfer_reason"],
  test_result: ["sensor", "nut", "ups_test_result"],
  nominal_power: ["sensor", "nut", "ups_realpower_nominal"],
  timer_shutdown: ["sensor", "nut", "ups_timer_shutdown"],
  // nobreak
  utility: ["binary_sensor", "nobreak", "rede_eletrica"],
  low_battery: ["binary_sensor", "nobreak", "bateria_fraca"],
  charging: ["binary_sensor", "nobreak", "carregando"],
  replace_battery: ["binary_sensor", "nobreak", "substituir_bateria"],
  overload: ["binary_sensor", "nobreak", "sobrecarga"],
  avr: ["binary_sensor", "nobreak", "avr"],
  shutdown_pending: ["binary_sensor", "nobreak", "desligamento_agendado"],
  power: ["sensor", "nobreak", "potencia_de_saida"],
  energy: ["sensor", "nobreak", "energia_de_saida"],
  outages: ["sensor", "nobreak", "quedas_de_energia"],
  last_outage: ["sensor", "nobreak", "ultima_queda"],
  last_outage_duration: ["sensor", "nobreak", "duracao_da_ultima_queda"],
  battery_time: ["sensor", "nobreak", "tempo_na_bateria"],
  last_test: ["sensor", "nobreak", "ultimo_autoteste"],
  battery_age: ["sensor", "nobreak", "idade_da_bateria"],
  firmware: ["sensor", "nobreak", "firmware"],
  battery_date: ["date", "nobreak", "data_da_bateria"],
  sensitivity: ["select", "nobreak", "sensibilidade"],
  beeper: ["switch", "nobreak", "alarme_sonoro"],
  transfer_low: ["number", "nobreak", "transferencia_baixa"],
  transfer_high: ["number", "nobreak", "transferencia_alta"],
  health: ["sensor", "nobreak", "saude_da_bateria"],
  real_runtime: ["sensor", "nobreak", "autonomia_real"],
  energy_today: ["sensor", "nobreak", "energia_hoje"],
  cost_today: ["sensor", "nobreak", "custo_hoje"],
  cost_month: ["sensor", "nobreak", "custo_do_mes"],
  v_min: ["sensor", "nobreak", "tensao_minima_hoje"],
  v_max: ["sensor", "nobreak", "tensao_maxima_hoje"],
  out_of_range: ["sensor", "nobreak", "tempo_fora_da_faixa_hoje"],
  outages_today: ["sensor", "nobreak", "quedas_hoje"],
  shedding: ["switch", "nobreak", "economia_automatica"],
  quick_test: ["button", "nobreak", "autoteste_rapido"],
  deep_test: ["button", "nobreak", "autoteste_completo"],
  stop_test: ["button", "nobreak", "parar_autoteste"],
  panel_test: ["button", "nobreak", "testar_painel"],
  mute: ["button", "nobreak", "silenciar_alarme"],
  cancel_shutdown: ["button", "nobreak", "cancelar_desligamento"],
} as const satisfies Record<string, readonly [string, string, string]>;

export type EntityKey = keyof typeof KEYS;

/** Visual states (CSS classes on the hero). */
export type UpsState =
  | "online"
  | "charging"
  | "on_battery"
  | "low_battery"
  | "testing"
  | "overload"
  | "shutdown"
  | "unavailable";

export const ALERT_STATES: ReadonlySet<UpsState> = new Set(["low_battery", "overload", "shutdown"]);
export const BATTERY_STATES: ReadonlySet<UpsState> = new Set(["on_battery", "low_battery", "shutdown"]);
