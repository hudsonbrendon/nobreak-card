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

  .pill {
    position: absolute;
    display: inline-flex;
    align-items: center;
    gap: 3px;
    padding: 2px 7px;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 600;
    line-height: 1.2;
    color: var(--bac-primary-text-color);
    background: var(--bac-background, var(--card-background-color));
    border: 1px solid var(--bac-divider-color);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    white-space: nowrap;
  }
  .pill ha-icon {
    --mdc-icon-size: 13px;
  }
  .pill ha-icon {
    --mdc-icon-size: 13px;
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

  /* ── illustration ───────────────────────────────────────────────────── */
  .hero {
    position: relative;
    margin: 0 auto;
    width: min(94%, 420px);
    cursor: pointer;
  }
  svg.ups {
    width: 100%;
    height: auto;
    display: block;
    overflow: visible;
    filter: drop-shadow(0 10px 14px rgba(0, 0, 0, 0.14));
  }
  .ups .outlet rect:first-child,
  .ups .load rect {
    fill: var(--bac-body);
    stroke: var(--bac-outline);
    stroke-width: 1.4;
  }
  .ups .outlet .slot {
    fill: var(--bac-cap);
    stroke: none;
  }
  .ups .load .screen {
    fill: var(--bac-panel);
    stroke: none;
  }
  .ups .cable {
    fill: none;
    stroke: var(--bac-metal-2);
    stroke-width: 4;
    stroke-linecap: round;
  }
  .ups .flow {
    fill: none;
    stroke-width: 2.4;
    stroke-linecap: round;
    stroke-dasharray: 3 9;
    animation: flow 1.1s linear infinite;
  }
  .ups .flow.in {
    stroke: #3b82f6;
  }
  .ups .flow.out {
    stroke: var(--bac-ok);
  }
  .ups .cut line {
    stroke: var(--bac-error);
    stroke-width: 3;
    stroke-linecap: round;
  }
  .ups .body {
    fill: var(--bac-body);
    stroke: var(--bac-outline);
    stroke-width: 1.4;
  }
  .ups .shadow {
    fill: rgba(0, 0, 0, 0.12);
  }
  .ups .panel {
    fill: var(--bac-panel);
  }
  .ups .button {
    fill: var(--bac-plate);
    stroke: var(--bac-ok);
    stroke-width: 2;
  }
  .ups .button-glyph {
    fill: none;
    stroke: var(--bac-ok);
    stroke-width: 2;
    stroke-linecap: round;
  }
  .ups .led {
    fill: #3a3f46;
  }
  .ups .led.power {
    fill: var(--bac-ok);
  }
  .ups .battery-shell,
  .ups .battery-cap {
    fill: var(--bac-body-2);
    stroke: var(--bac-outline);
    stroke-width: 1.4;
  }
  .ups .battery-fill {
    transition: y 0.8s ease, height 0.8s ease;
  }
  .ups .battery-fill.high {
    fill: var(--bac-ok);
  }
  .ups .battery-fill.mid {
    fill: var(--bac-warning);
  }
  .ups .battery-fill.low {
    fill: var(--bac-error);
  }
  .ups .bolt {
    fill: #fff;
    opacity: 0;
  }
  .ups .vent {
    stroke: var(--bac-metal);
    stroke-width: 2;
    stroke-linecap: round;
  }

  /* states */
  .hero.charging .ups .bolt {
    opacity: 0.9;
    animation: breathe 1.8s ease-in-out infinite;
  }
  .hero.charging .ups .battery-fill {
    animation: breathe 2.4s ease-in-out infinite;
  }
  .hero.on_battery .ups .flow.in,
  .hero.low_battery .ups .flow.in,
  .hero.shutdown .ups .flow.in {
    stroke: transparent;
    animation: none;
  }
  .hero.on_battery .ups .flow.out,
  .hero.low_battery .ups .flow.out,
  .hero.shutdown .ups .flow.out {
    stroke: var(--bac-warning);
  }
  .hero.on_battery .ups .led.power,
  .hero.testing .ups .led.power {
    fill: var(--bac-warning);
  }
  .hero.on_battery .ups .led.battery {
    fill: var(--bac-warning);
    animation: blink 1.2s steps(1) infinite;
  }
  .hero.on_battery .ups .button,
  .hero.on_battery .ups .button-glyph,
  .hero.testing .ups .button,
  .hero.testing .ups .button-glyph {
    stroke: var(--bac-warning);
  }
  .hero.low_battery .ups .led.power,
  .hero.low_battery .ups .led.battery,
  .hero.shutdown .ups .led.battery,
  .hero.overload .ups .led.battery {
    fill: var(--bac-error);
    animation: blink 0.5s steps(1) infinite;
  }
  .hero.low_battery .ups .button,
  .hero.low_battery .ups .button-glyph,
  .hero.overload .ups .button,
  .hero.overload .ups .button-glyph,
  .hero.shutdown .ups .button,
  .hero.shutdown .ups .button-glyph {
    stroke: var(--bac-error);
  }
  .hero.overload .ups .body {
    stroke: var(--bac-error);
    stroke-width: 2.4;
    animation: breathe 1s ease-in-out infinite;
  }
  .hero.testing .ups .led.battery {
    fill: var(--bac-warning);
    animation: blink 0.7s steps(1) infinite;
  }
  .hero.testing .ups .flow.in {
    animation-duration: 2.4s;
    opacity: 0.5;
  }
  .hero.unavailable svg.ups {
    filter: grayscale(1);
    opacity: 0.45;
  }
  .hero.unavailable .ups .flow {
    display: none;
  }
  .hero.unavailable .ups .led {
    fill: #3a3f46;
  }

  .pill.charge {
    top: 79%;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .pill.charge.low {
    color: #fff;
    background: var(--bac-error);
    border-color: transparent;
  }
  .pill.runtime {
    top: 4%;
    right: 22%;
  }
  .pill.runtime.warn {
    color: #fff;
    background: var(--bac-warning);
    border-color: transparent;
  }
  .pill.power {
    top: 46%;
    right: 0;
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

  @keyframes flow {
    to {
      stroke-dashoffset: -24;
    }
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
    .ups {
      animation: none !important;
      transition: none !important;
    }
  }
`;
