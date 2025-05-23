# Litter-Robot 4 Card

A Home Assistant Lovelace custom card to display Litter-Robot 4 information in a beautiful and intuitive way.

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)

## Features

- Display Litter-Robot 4 status and information
- Configurable entity selection through the UI
- Modern and clean design
- Real-time status updates

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
2. Copy it to your `config/www/community/litter-robot4-card/dist/` directory
3. Add the following to your Lovelace resources:
   ```yaml
   resources:
     - url: /local/community/litter-robot4-card/dist/litter-robot4-card.js
       type: module
   ```

## Configuration

### Using the UI

1. Add the card to your dashboard
2. Click "Configure" on the card
3. Select your Litter-Robot 4 entities from the dropdown menus

### Using YAML

```yaml
type: custom:litter-robot4-card
entity: sensor.litter_robot_4_status
weight_entity: sensor.litter_robot_4_weight
cycles_entity: sensor.litter_robot_4_cycles
```

### Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | string | required | Main Litter-Robot 4 status entity |
| weight_entity | string | optional | Entity ID for weight sensor |
| cycles_entity | string | optional | Entity ID for cycle count sensor |

## Development

### Prerequisites

- Node.js
- npm

### Setup

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run build` to build the card
4. Copy the generated `dist/litter-robot4-card.js` to your Home Assistant installation

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 