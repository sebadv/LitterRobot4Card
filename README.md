# Litter-Robot 4 Card

A Home Assistant Lovelace custom card to display Litter-Robot 4 information in a beautiful and intuitive way.

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)
[![buymeacoffee_badge](https://img.shields.io/badge/Buy%20me%20a%20coffee-%23FFDD00?style=flat&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/seba.gent)

## Prerequisites

This card requires the [official Litter-Robot integration](https://www.home-assistant.io/integrations/litterrobot/) to be installed and configured in your Home Assistant instance. The card uses the following entities provided by the integration:

- Status Code Entity (`sensor.litterrobot_status_code`)
- Litter Level Entity (`sensor.litterrobot_litter_level`)
- Waste Drawer Entity (`sensor.litterrobot_waste_drawer`)
- Pet Weight Entities (from pet profiles in the Whisker app)

## Features

- Display Litter-Robot 4 status and information
- Shows litter level, waste drawer status, and current operation status
- Multiple pet weight tracking with automatic unit conversion (lbs/kg)
- Configurable entity selection through the UI
- Modern and clean design
- Real-time status updates

## Upcoming Features

- Visual representation of litter and waste levels similar to the Whisker app
- More UI improvements and customization options

## Installation

### HACS (Recommended)

1. Make sure you have [HACS](https://hacs.xyz) installed in your Home Assistant instance
2. Add this repository as a custom repository in HACS:
   - Click on HACS in the sidebar
   - Click on "Frontend"
   - Click the three dots in the top right corner
   - Select "Custom repositories"
   - Add the URL of this repository
   - Select "Lovelace" as the category
3. Click "Install"
4. Add the card to your dashboard:
   - Click the three dots menu in the top right of your dashboard and select "Edit Dashboard"
   - Click the "+" button to add a new card
   - Search for "Litter-Robot 4" in the card picker

### Manual Installation

1. Download the `litter-robot4-card.js` file from the latest release
2. Copy it to your `config/www/community/litter-robot4-card/` directory
3. Add the following to your Lovelace resources:
   ```yaml
   resources:
     - url: /local/community/litter-robot4-card/litter-robot4-card.js
       type: module
   ```

## Configuration

### Using the UI

1. Add the card to your dashboard
2. Click "Configure" on the card
3. Select your Litter-Robot 4 entities from the dropdown menus:
   - Status Code Entity: Shows the current operation status code
   - Litter Level Entity: Shows how full the litter box is
   - Waste Drawer Entity: Shows the waste drawer status
4. Add pet weight entities:
   - Click "Add Pet" to add a new pet weight entity
   - Each pet's weight will show their friendly name from Home Assistant
   - You can add as many pets as you need
5. Toggle "Use Metric Units" if you want to display weights in kilograms instead of pounds

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
use_metric: false  # Optional, defaults to false (lbs)
```

### Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | array | required | List of main entities in order: [status_code, litter_level, waste_drawer] |
| pet_weight_entities | array | optional | List of pet weight sensor entities |
| use_metric | boolean | false | Set to `true` to display weight in kg instead of lbs |

## Development

### Prerequisites

- Node.js
- npm

### Setup

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run build` to build the card
4. Copy the generated `litter-robot4-card.js` to your Home Assistant installation

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 