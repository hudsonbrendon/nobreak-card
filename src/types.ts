import type { EntityKey } from "./const";

export interface HassState {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_changed?: string;
}

export interface EntityRegistryEntry {
  entity_id: string;
  platform?: string;
  translation_key?: string | null;
  device_id?: string | null;
}

export interface DeviceRegistryEntry {
  id: string;
  name?: string | null;
  name_by_user?: string | null;
  via_device_id?: string | null;
}

export interface HassObject {
  states: Record<string, HassState>;
  entities?: Record<string, EntityRegistryEntry>;
  devices?: Record<string, DeviceRegistryEntry>;
  locale?: { language?: string };
  language?: string;
  themes?: { darkMode?: boolean };
  formatEntityState?: (stateObj: HassState) => string;
  callWS?<T>(msg: Record<string, unknown>): Promise<T>;
  callService(
    domain: string,
    service: string,
    serviceData?: Record<string, unknown>,
    target?: Record<string, unknown>
  ): Promise<unknown>;
}

export interface NobreakCardConfig {
  type: string;
  /** Device of the `nobreak` integration; the NUT device is found through via_device. */
  device?: string;
  entities?: Partial<Record<EntityKey, string>>;
  name?: string;
  show_name?: boolean;
  show_status?: boolean;
  show_history?: boolean;
  show_graph?: boolean;
  show_toolbar?: boolean;
  compact_view?: boolean;
  language?: string;
}

export type ResolvedEntities = Partial<Record<EntityKey, string>>;

/** history/history_during_period with minimal_response: state + last_updated (s). */
export type HistoryResponse = Record<string, Array<{ s: string; lu: number }>>;

export interface Graph {
  start: number;
  end: number;
  power: Array<[number, number]>;
  voltage: Array<[number, number]>;
  outages: Array<[number, number]>;
}
