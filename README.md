# Nobreak Card

[![HACS](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://hacs.xyz)
[![Release](https://img.shields.io/github/v/release/hudsonbrendon/nobreak-card)](https://github.com/hudsonbrendon/nobreak-card/releases)
[![Lint and Test](https://github.com/hudsonbrendon/nobreak-card/actions/workflows/lint.yml/badge.svg)](https://github.com/hudsonbrendon/nobreak-card/actions/workflows/lint.yml)

Animated Lovelace card for a UPS (nobreak) through the
[Nobreak (NUT)](https://github.com/hudsonbrendon/ha-nobreak) integration,
reading the live values from the core **Network UPS Tools** device it is
connected via. Same layout and grey/white drawing as the vacuum, HP printer,
MiSTer and Bambu cards.

![states](assets/states.png)

![graphs and history](assets/graphs.png)

- **Drawing**: the APC Back-UPS tower in the same oblique, grey/black style as
  the console and appliance cards (glossy front, power button with its LED
  ring, status LEDs, side grille, floor line). The ring is green on utility,
  breathes while charging, blinks amber on battery / self-test (with a bolt)
  and red with a warning sign on low battery, overload or a scheduled
  shutdown.
- **Status**: online, charging, on battery (and for how long), low battery,
  self-test, overload, shutdown scheduled, unavailable.
- **Stats**: battery % and runtime left (the real one once measured), output power (W, load % of nominal),
  utility voltage with the transfer range (or *No power*).
- **History**: outages (count, last one and its duration), total time on
  battery, last self-test and result, battery age, **battery health** (with
  the real runtime measured on the last discharge) and **grid today** (min–max
  voltage, time out of the adequate band).
- **Graphs** (optional, `show_graph: true`): output power and utility voltage
  over the last 24 h with the outages shaded (history API, every 5 min).
- **Toolbar**: quick self-test, deep self-test (with confirmation), front panel
  test, stop test while one runs, cancel a scheduled shutdown, mute while on
  battery, enable/disable the alarm, automatic load shedding on/off, input
  sensitivity.
- **Tips**: replace battery, AVR active, alarm disabled, output energy and
  cost today, firmware.
- Entities are found by the integrations' `translation_key`, so it works in
  any Home Assistant language. Visual editor, entity suggestion, en + pt-BR,
  dark mode, `prefers-reduced-motion`.

## Install

HACS → Frontend → ⋮ → *Custom repositories* → add
`https://github.com/hudsonbrendon/nobreak-card` as *Dashboard*, then install
**Nobreak Card**. Manual: copy `dist/nobreak-card.js` to `/config/www/` and add
it as a JavaScript module resource.

Requires the [Nobreak (NUT)](https://github.com/hudsonbrendon/ha-nobreak)
integration (2026.11+: its device is linked to the NUT one with
"connected via").

## Configuration

```yaml
type: custom:nobreak-card
device: <nobreak device id>   # pick it in the visual editor
# name: Nobreak
# show_name: true
# show_status: true
# show_history: true
# show_graph: false
# show_toolbar: true
# compact_view: false
# entities:                   # optional overrides, by card key
#   charge: sensor.my_ups_battery_charge
```

## Development

```bash
npm ci
npm run lint && npm run typecheck && npm test
npm run build   # dist/nobreak-card.js
```

## License

MIT
