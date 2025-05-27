# Litter-Robot 4 Card

A custom Home Assistant card for displaying Litter-Robot 4 status with support for litter level, waste drawer, optional hopper, and pet weight tracking.

## Features

- **Status Display**: Shows current Litter-Robot 4 status with color-coded indicators
- **Litter Level**: Visual indicator of litter level with color coding (green/yellow/red)
- **Waste Drawer**: Shows waste level with appropriate color indicators
- **Optional Hopper Support**: Display litter hopper status if available
- **Pet Weight Tracking**: Support for multiple pet weight entities
- **Multi-language Support**: Built-in translations for English, Spanish, Dutch, and French
- **Full UI Editor**: Complete configuration interface with entity dropdowns and settings
- **HACS Compatible**: Easy installation and updates through HACS

## Installation

### HACS (Recommended)

1. Open HACS in Home Assistant
2. Go to "Frontend" section
3. Click the "+" button
4. Search for "Litter-Robot 4 Card"
5. Click "Download"
6. Restart Home Assistant

### Manual Installation

1. Download `litter-robot4-card.js` from the latest release
2. Copy the file to your `config/www/` directory
3. Add the resource to your dashboard:
   - Go to Settings → Dashboards → Resources
   - Click "Add Resource"
   - URL: `/local/litter-robot4-card.js`
   - Resource Type: JavaScript Module

## Configuration

### Using the UI Editor (Recommended)

1. In your dashboard, click "Add Card"
2. Search for "Litter-Robot 4 Card"
3. Configure the required entities:
   - **Status Code Entity** (required)
   - **Litter Level Entity** (required) 
   - **Waste Drawer Entity** (required)
4. Optionally configure:
   - **Litter Hopper Entity**
   - **Pet Weight Entities** (add multiple pets)
   - **Language** (English, Spanish, Dutch, French)
   - **Metric Units** (kg vs lbs for pet weights)

### Manual YAML Configuration

```yaml
type: custom:litter-robot4-card
entities:
  - sensor.litter_robot_status_code    # Required: Status
  - sensor.litter_robot_litter_level   # Required: Litter level
  - sensor.litter_robot_waste_level    # Required: Waste level  
  - sensor.litter_robot_hopper_status  # Optional: Hopper
pet_weight_entities:
  - sensor.pet1_weight                 # Optional: Pet weights
  - sensor.pet2_weight
language: en                           # Optional: en, es, nl, fr
use_metric: false                      # Optional: true for kg, false for lbs
```

## Supported Languages

The card includes built-in translations for:
- **English** (en) - Default
- **Spanish** (es) 
- **Dutch** (nl)
- **French** (fr)

Translations are embedded directly in the card following HACS best practices.

## Entity Requirements

### Required Entities
- **Status Code Entity**: Sensor showing Litter-Robot status codes (br, ccc, rdy, etc.)
- **Litter Level Entity**: Sensor showing litter level percentage (0-100)
- **Waste Drawer Entity**: Sensor showing waste level percentage (0-100)

### Optional Entities
- **Litter Hopper Entity**: Sensor showing hopper status (enabled, disabled, empty, etc.)
- **Pet Weight Entities**: Sensors showing pet weights in pounds or kilograms

## Status Codes

The card recognizes these Litter-Robot 4 status codes:

| Code | Meaning | Color |
|------|---------|-------|
| `rdy` | Ready | Blue |
| `ccc` | Clean Cycle Complete | Blue |
| `ccp` | Clean Cycle In Progress | Orange |
| `cd` | Clean Cycle Done | Blue |
| `p` | Paused | Yellow |
| `off` | Power Off | Gray |
| `br` | Bonnet Removed | Red |
| `df1`/`df2` | Drawer Full | Red |
| `csf` | Cat Sensor Fault | Red |

## Hopper States

If you have a hopper entity configured, these states are supported:

| State | Meaning | Color |
|-------|---------|-------|
| `enabled` | Hopper Enabled | Green |
| `disabled` | Hopper Disabled | Gray |
| `empty` | Hopper Empty | Yellow |
| `motor_fault_short` | Motor Fault | Red |
| `motor_ot_amps` | Motor Overcurrent | Red |
| `motor_disconnected` | Motor Disconnected | Red |

## Development

This card is built using vanilla JavaScript following HACS best practices. No external dependencies or build tools required.

## Support

If you encounter issues:

1. Check that all required entities exist and have valid states
2. Verify entity names in the configuration
3. Check the browser console for error messages
4. Report issues on the GitHub repository

## License

MIT License - see LICENSE file for details. 