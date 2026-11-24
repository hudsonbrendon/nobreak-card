import { css } from "lit";

export const cardStyles = css`
  :host {
    --bac-background: var(--ha-card-background, var(--card-background-color, transparent));
    --bac-primary-text-color: var(--primary-text-color);
    --bac-secondary-text-color: var(--secondary-text-color);
    --bac-divider-color: var(--entities-divider-color, var(--divider-color));
    --bac-ok: var(--success-color, #43a047);
    --bac-warning: var(--warning-color, #ffa600);
    --bac-error: var(--error-color, #db4437);
    --bac-accent: #16a34a;
    --bac-spacing: 10px;
    /* illustration palette, shared with the vacuum / printer / MiSTer cards */
    --bac-body: #f6f7f8;
    --bac-body-2: #e4e6e9;
    --bac-metal: #c9cdd2;
    --bac-metal-hi: #eceef0;
    --bac-metal-2: #a9afb6;
    --bac-cap: #6b7178;
    --bac-outline: #9aa0a6;
    --bac-panel: #2b2f36;
    --bac-plate: #1f2226;
    --bac-gold: #c9a23c;
    --bac-light: #fff4c8;
    --bac-flange: #eef0f2;
    --bac-filament-unknown: #b8bcc2;
    --bac-perf: rgba(255, 255, 255, 0.55);
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  :host([dark-mode]) {
    --bac-body: #4a4f58;
    --bac-body-2: #3a3f47;
    --bac-metal: #5d636c;
    --bac-metal-hi: #7a8089;
    --bac-metal-2: #474c54;
    --bac-cap: #2a2e34;
    --bac-outline: #6b7178;
    --bac-panel: #15171b;
    --bac-plate: #121417;
    --bac-flange: #5a5f68;
    --bac-perf: rgba(0, 0, 0, 0.3);
  }

  ha-card {
    background: var(--bac-background);
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    overflow: hidden;
  }
  .preview {
    position: relative;
    text-align: center;
  }
  .preview.not-available {
    filter: grayscale(1);
  }

  /* ── header ─────────────────────────────────────────────────────────── */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .tips {
    display: flex;
    gap: var(--bac-spacing);
    flex-grow: 1;
    flex-wrap: wrap;
    align-items: center;
    padding: var(--bac-spacing);
    color: var(--bac-secondary-text-color);
    font-size: 0.95rem;
  }
  .tip {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    line-height: 1;
    white-space: nowrap;
  }
  .tip ha-icon {
    --mdc-icon-size: 18px;
  }
  .tip.alert {
    color: var(--bac-error);
  }
  .tip.update {
    color: var(--bac-accent);
  }
  .more-info {
    color: var(--bac-secondary-text-color);
    margin: 2px;
  }

  /* ── metadata ───────────────────────────────────────────────────────── */
  .metadata {
    margin: var(--bac-spacing) auto;
  }
  .name {
    text-align: center;
    font-weight: bold;
    color: var(--bac-primary-text-color);
    font-size: 16px;
  }
  .status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color: var(--bac-secondary-text-color);
  }
  .status.error,
  .status.failed {
    color: var(--bac-error);
  }
  .status.paused {
    color: var(--bac-warning);
  }

  /* ── stats ──────────────────────────────────────────────────────────── */
  .stats {
    border-top: 1px solid var(--bac-divider-color);
    display: flex;
    justify-content: space-evenly;
    color: var(--bac-secondary-text-color);
  }
  .stats-block {
    padding: var(--bac-spacing) 4px;
    text-align: center;
    border-right: 1px solid var(--bac-divider-color);
    flex: 1 1 0;
    min-width: 0;
  }
  .stats-block:last-of-type {
    border-right: 0;
  }
  .stats-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
  }
  .stats-value {
    cursor: pointer;
    font-size: 20px;
    color: var(--bac-primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .stats-value.hot {
    color: #e8701a;
  }
  .stats-subtitle {
    font-size: 0.82rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  /* ── toolbar ────────────────────────────────────────────────────────── */
  .toolbar {
    min-height: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px;
    border-top: 1px solid var(--bac-divider-color);
  }
  .toolbar .fill-gap {
    flex-grow: 1;
  }
  .toolbar ha-icon-button {
    color: var(--bac-secondary-text-color);
    width: 44px;
    height: 44px;
    --mdc-icon-button-size: 44px;
  }
  .toolbar ha-icon-button ha-icon {
    display: flex;
  }
  .toolbar ha-icon-button.active {
    color: var(--bac-warning);
  }
  .toolbar .text-button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 0;
    background: transparent;
    color: var(--bac-secondary-text-color);
    font: inherit;
    padding: 12px 10px;
    cursor: pointer;
    border-radius: 8px;
  }
  .toolbar .text-button:hover {
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
  }
  .toolbar .text-button.danger {
    color: var(--bac-error);
  }
  .toolbar .text-button ha-icon {
    --mdc-icon-size: 20px;
  }

  .tip.warn {
    color: var(--bac-warning);
  }
  .empty {
    padding: 24px 16px;
    color: var(--bac-secondary-text-color);
    text-align: center;
  }

  /* ── illustration (same drawing style as the console / appliance cards) ── */
  .hero {
    display: block;
    margin: 0 auto;
    cursor: pointer;
    width: min(86%, 340px);
  }
  .art {
    width: 100%;
    height: auto;
    overflow: visible;
  }
  .art.unavailable {
    opacity: 0.45;
  }
  .ups {
    --ups-black: #2b2f36;
    --ups-black-2: #3a3f47;
    --ups-black-3: #1d2025;
    --ups-led: #6fc24a;
  }
  .ups .floor {
    stroke: var(--bac-metal);
    stroke-width: 1.5;
    stroke-linecap: round;
  }
  .ups .dark-front {
    fill: var(--ups-black-3);
    stroke: #121417;
    stroke-width: 1;
    stroke-linejoin: round;
  }
  .ups .dark-top {
    fill: var(--ups-black-2);
    stroke: #121417;
    stroke-width: 1;
    stroke-linejoin: round;
  }
  .ups .dark-side {
    fill: var(--ups-black);
    stroke: #121417;
    stroke-width: 1;
    stroke-linejoin: round;
  }
  .ups .dark-side-low {
    fill: #33373e;
  }
  .ups .grille-area {
    fill: var(--ups-black-3);
  }
  .ups .slat {
    stroke: var(--ups-black-2);
    stroke-width: 1.6;
    stroke-linecap: round;
  }
  .ups .gloss {
    fill: #15171b;
  }
  .ups .shine {
    stroke: #fff;
    stroke-width: 1;
    opacity: 0.18;
  }
  .ups .wordmark {
    font: 700 7px/1 system-ui, sans-serif;
    fill: #d8dbe0;
    letter-spacing: 0.4px;
  }
  .ups .wordmark.small {
    font: 600 4px/1 system-ui, sans-serif;
    fill: var(--bac-outline);
  }
  .ups .emboss {
    font: 600 6px/1 system-ui, sans-serif;
    fill: var(--ups-black-2);
  }
  .ups .ring {
    fill: #121417;
  }
  .ups .chrome-button {
    fill: #c9ccd1;
    stroke: #8d939b;
    stroke-width: 0.8;
  }
  .ups .power-glyph {
    fill: none;
    stroke: #5f656d;
    stroke-width: 1;
    stroke-linecap: round;
  }
  .ups .led-ring {
    fill: none;
    stroke: var(--ups-led);
    stroke-width: 1.8;
    opacity: 0;
  }
  .ups .led {
    fill: #3a3f46;
  }
  .ups .foot {
    fill: #121417;
  }
  .ups .bolt path {
    fill: var(--bac-warning);
    opacity: 0;
  }
  .ups .warn-sign path {
    fill: var(--bac-error);
  }
  .ups .warn-glyph {
    fill: #fff;
  }

  /* state: the power ring and LEDs tell it, like the consoles' power light */
  .ups.online .led-ring,
  .ups.charging .led-ring {
    opacity: 1;
  }
  .ups.online .led-utility,
  .ups.charging .led-utility {
    fill: var(--ups-led);
    filter: drop-shadow(0 0 2px var(--ups-led));
  }
  .ups.charging .led-ring {
    animation: breathe 3s ease-in-out infinite;
  }
  .ups.charging .led-battery {
    fill: #f2b33d;
    animation: breathe 2s ease-in-out infinite;
  }
  .ups.on_battery,
  .ups.testing {
    --ups-led: var(--bac-warning);
  }
  .ups.on_battery .led-ring,
  .ups.testing .led-ring,
  .ups.on_battery .led-battery,
  .ups.testing .led-battery {
    opacity: 1;
    fill: var(--ups-led);
    animation: blink 1.2s steps(1) infinite;
  }
  .ups.on_battery .led-ring,
  .ups.testing .led-ring {
    fill: none;
  }
  .ups.on_battery .bolt path {
    opacity: 1;
    animation: breathe 1.6s ease-in-out infinite;
  }
  .ups.low_battery,
  .ups.overload,
  .ups.shutdown {
    --ups-led: var(--bac-error);
  }
  .ups.low_battery .led-ring,
  .ups.overload .led-ring,
  .ups.shutdown .led-ring {
    opacity: 1;
    animation: blink 0.5s steps(1) infinite;
  }
  .ups.low_battery .led-battery,
  .ups.overload .led-battery,
  .ups.shutdown .led-battery {
    fill: var(--ups-led);
    animation: blink 0.5s steps(1) infinite;
  }
  .ups .warn-sign {
    animation: breathe 1.2s ease-in-out infinite;
  }

  .detail {
    margin-top: 4px;
    font-size: 0.85rem;
    color: var(--bac-secondary-text-color);
  }
  .status .sub {
    opacity: 0.8;
  }
  .status.on_battery,
  .status.testing {
    color: var(--bac-warning);
  }
  .status.alert {
    color: var(--bac-error);
  }
  .stats-value.bad {
    color: var(--bac-error);
  }
  .stats-value.warn {
    color: var(--bac-warning);
  }

  /* ── history ────────────────────────────────────────────────────────── */
  .history {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid var(--bac-divider-color);
  }
  .chip {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    cursor: pointer;
    min-width: 0;
    color: var(--bac-secondary-text-color);
    border-right: 1px solid var(--bac-divider-color);
  }
  .chip:nth-child(2n) {
    border-right: 0;
  }
  .chip:nth-child(n + 3) {
    border-top: 1px solid var(--bac-divider-color);
  }
  .chip ha-icon {
    --mdc-icon-size: 20px;
    flex-shrink: 0;
  }
  .chip.warn ha-icon,
  .chip.warn .chip-value {
    color: var(--bac-warning);
  }
  .chip-text {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
    min-width: 0;
    text-align: left;
  }
  .chip-value {
    color: var(--bac-primary-text-color);
    font-weight: 500;
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .chip-label {
    font-size: 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .select {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--bac-secondary-text-color);
    padding: 0 6px;
  }
  .select ha-icon {
    --mdc-icon-size: 20px;
  }
  .select select {
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    cursor: pointer;
    padding: 10px 2px;
  }
  .select select option {
    color: initial;
  }

  /* ── graphs ─────────────────────────────────────────────────────────── */
  .graphs {
    border-top: 1px solid var(--bac-divider-color);
    padding: 8px 12px 6px;
  }
  .graph {
    cursor: pointer;
    margin-bottom: 6px;
  }
  .graph-head,
  .graph-foot {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: var(--bac-secondary-text-color);
    margin-bottom: 2px;
  }
  .graph svg {
    width: 100%;
    height: 46px;
    display: block;
    overflow: visible;
  }
  .graph polyline {
    fill: none;
    stroke-width: 1.6;
    vector-effect: non-scaling-stroke;
    stroke-linejoin: round;
  }
  .graph polyline.power {
    stroke: var(--bac-ok);
  }
  .graph polyline.voltage {
    stroke: #3b82f6;
  }
  .graph rect.outage {
    fill: var(--bac-warning);
    opacity: 0.25;
  }
  .legend {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  .legend i {
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background: var(--bac-warning);
    opacity: 0.5;
  }
  .toolbar ha-icon-button.on {
    color: var(--bac-ok);
  }

  @keyframes blink {
    50% {
      opacity: 0.15;
    }
  }
  @keyframes breathe {
    50% {
      opacity: 0.55;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .ups *,
    .ups,
    .ups .warn-sign {
      animation: none !important;
      transition: none !important;
    }
  }
`;
