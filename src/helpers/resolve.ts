import { KEYS, PLATFORMS, type EntityKey, type UpsState } from "../const";
import type { HassObject, NobreakCardConfig, ResolvedEntities } from "../types";

const GONE = new Set(["unavailable", "unknown", ""]);

/** The nobreak device plus the NUT device it is connected via (and anything connected via it). */
export function relatedDevices(hass: HassObject | undefined, deviceId: string): Set<string> {
  const devices = hass?.devices ?? {};
  const ids = new Set([deviceId]);
  const parent = devices[deviceId]?.via_device_id;
  if (parent) ids.add(parent);
  for (const d of Object.values(devices)) {
    if (d.via_device_id && (d.via_device_id === deviceId || d.via_device_id === parent)) ids.add(d.id);
  }
  return ids;
}

/** Card keys -> entity ids: by platform + translation_key on the related devices, then config overrides. */
export function resolveEntities(hass: HassObject | undefined, config: NobreakCardConfig): ResolvedEntities {
  const resolved: ResolvedEntities = {};
  if (config.device) {
    const devices = relatedDevices(hass, config.device);
    for (const entry of Object.values(hass?.entities ?? {})) {
      if (!entry.platform || !PLATFORMS.includes(entry.platform) || !devices.has(entry.device_id ?? "")) continue;
      const domain = entry.entity_id.split(".")[0];
      for (const [key, [keyDomain, platform, tk]] of Object.entries(KEYS)) {
        if (keyDomain === domain && platform === entry.platform && tk === entry.translation_key && !resolved[key as EntityKey]) {
          resolved[key as EntityKey] = entry.entity_id;
        }
      }
    }
  }
  return { ...resolved, ...(config.entities ?? {}) };
}

/** NUT ups.status flags ("OL CHRG", "OB DISCHRG LB"...). */
export function statusFlags(raw: string | undefined): Set<string> {
  return new Set((raw ?? "").toUpperCase().split(/\s+/).filter(Boolean));
}

export function computeState(hass: HassObject | undefined, e: ResolvedEntities): UpsState {
  const st = (key: EntityKey) => (e[key] ? hass?.states[e[key]!]?.state : undefined);
  const on = (key: EntityKey) => st(key) === "on";
  const raw = st("status");
  const flags = statusFlags(GONE.has(raw ?? "") ? undefined : raw);
  const utility = st("utility");
  if (!flags.size && (utility === undefined || GONE.has(utility))) return "unavailable";
  if (on("shutdown_pending") || flags.has("FSD")) return "shutdown";
  if (on("overload") || flags.has("OVER")) return "overload";
  const onBattery = flags.has("OB") || utility === "off";
  if (st("test_result") === "In progress" || flags.has("CAL") || flags.has("TEST")) return "testing";
  if (onBattery && (on("low_battery") || flags.has("LB"))) return "low_battery";
  if (onBattery) return "on_battery";
  if (on("charging") || flags.has("CHRG")) return "charging";
  return "online";
}

/** Seconds -> "7 min", "1 h 05 min", "2 d 3 h". */
export function formatDuration(seconds: number): string {
  const s = Math.max(0, Math.round(seconds));
  if (s < 60) return `${s} s`;
  const m = Math.round(s / 60);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  if (h < 48) return m % 60 ? `${h} h ${String(m % 60).padStart(2, "0")} min` : `${h} h`;
  return `${Math.floor(h / 24)} d ${h % 24} h`;
}

/** Seconds of a duration sensor in s / min / h / d. */
export function toSeconds(value: number, unit: unknown): number {
  switch (unit) {
    case "min":
      return value * 60;
    case "h":
      return value * 3600;
    case "d":
      return value * 86400;
    default:
      return value;
  }
}

/** Battery age in days -> [years, months] (30.44-day months). */
export function ageParts(days: number): [number, number] {
  const months = Math.floor(days / 30.44);
  return [Math.floor(months / 12), months % 12];
}
