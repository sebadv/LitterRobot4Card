# Litter-Robot 4 Card

A Home Assistant Lovelace custom card that displays Litter-Robot 4 status, litter level, and waste drawer information.

![Litter-Robot 4 Card](https://raw.githubusercontent.com/sebadv/LitterRobot4Card/main/images/card.png)

## Prerequisites

1. Home Assistant installed
2. HACS (Home Assistant Community Store) installed
3. [Litter-Robot Integration](https://www.home-assistant.io/integrations/litterrobot/) set up in Home Assistant

## Installation

### HACS Installation (Recommended)

1. Open HACS in your Home Assistant instance
2. Click on "Frontend" in the sidebar
3. Click the "+ Explore & Download Repositories" button
4. Search for "Litter-Robot 4"
5. Click "Download"
6. Restart Home Assistant

### Manual Installation

1. Download the `litter-robot4-card.js` file from the [latest release](https://github.com/sebadv/LitterRobot4Card/releases)
2. Copy it to your `config/www/community/litter-robot4-card/` directory
3. Add the following to your Lovelace resources:
   ```yaml
   resources:
     - url: /local/community/litter-robot4-card/litter-robot4-card.js
       type: module
   ```

## Configuration

### Using the UI

1. Add the card to your dashboard:
   - Click the three dots menu in the top right of your dashboard
   - Select "Edit Dashboard"
   - Click the "+" button to add a new card
   - Search for "Litter-Robot 4"

2. Configure the card:
   - Click "Configure" on the card
   - Required Entities:
     - Status Entity: Shows the current operation status
     - Litter Level Entity: Shows how full the litter box is
     - Waste Drawer Entity: Shows the waste drawer status
   - Optional Settings:
     - Pet Weight Entities: Add multiple pet weight sensors
     - Language: Choose from English, Spanish, Dutch, or French
     - Use Metric Units: Toggle between pounds (lbs) and kilograms (kg)

### Using YAML

```yaml
type: custom:litter-robot4-card
entities:
  - sensor.litterrobot_status_code  # Required: The status code sensor
  - sensor.litterrobot_litter_level  # Required: Litter level sensor
  - sensor.litterrobot_waste_drawer  # Required: Waste drawer sensor
pet_weight_entities:  # Optional: List of pet weight sensors
  - sensor.cat1_weight
  - sensor.cat2_weight
  # Add as many pet weight sensors as needed
language: en  # Optional: 'en', 'es', 'nl', or 'fr' (defaults to 'en')
use_metric: false  # Optional: Set to true for kg instead of lbs (defaults to false)
```

### Configuration Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | array | required | List of main entities in order: [status_code, litter_level, waste_drawer] |
| pet_weight_entities | array | optional | List of pet weight sensor entities |
| language | string | 'en' | Interface language ('en', 'es', 'nl', 'fr') |
| use_metric | boolean | false | Set to `true` to display weight in kg instead of lbs |

### Available Languages

- English (en)
- Spanish (es)
- Dutch (nl)
- French (fr)

### Status Indicators

The card uses color-coded indicators for different states:

- Status Colors:
  - 🔵 Blue: Ready, Clean Cycle Complete, Clean Cycle Done
  - 🟠 Orange: Clean Cycle In Progress
  - 🔴 Red: Various error states and faults
  - 🟡 Yellow: Paused, Power Up, Power Drained, Pad Detect
  - ⚫ Gray: Power Off, Offline

- Litter Level Colors:
  - 🟢 Green: ≥ 70%
  - 🟡 Yellow: 40-69%
  - 🔴 Red: < 40%

- Waste Drawer Colors:
  - 🟢 Green: ≤ 70%
  - 🟡 Yellow: 71-90%
  - 🔴 Red: > 90%

## Features

- Real-time status display with color indicators
- Litter level monitoring
- Waste drawer level monitoring
- Multiple pet weight tracking
- Multi-language support
- Metric/Imperial unit conversion
- Interactive elements (click for more details)
- Modern, clean design that matches Home Assistant's theme

## Support

If you like this card, feel free to buy me a coffee:

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/sebadv)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 