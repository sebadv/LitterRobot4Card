/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement, html, css } from 'lit';

console.debug("Registering Litter-Robot 4 Card...");
console.info("%c LITTER-ROBOT-4-CARD %c Loaded ", "color: white; background: #4caf50; font-weight: 700;", "color: #4caf50; background: white; font-weight: 700;");

try {
  console.debug("Adding to custom cards list...");
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: "litter-robot4-card", 
    name: "Litter-Robot 4 Card", 
    description: "A custom card to show Litter-Robot 4 status", 
    preview: true
  });
  console.debug("Added to custom cards list successfully");
} catch (error) {
  console.error("Error adding to custom cards list:", error);
}

class LitterRobot4Card extends LitElement {
  static async getConfigElement() {
    await customElements.whenDefined("litter-robot4-editor");
    return document.createElement("litter-robot4-editor");
  }

  static getStubConfig() {
    return {type: "custom:litter-robot4-card", entities: ["", "", "", ""], pet_weight_entities: [], language: "en"};
  }

  static get properties() {
    return {
      hass: {type: Object}, 
      _config: {type: Object},
      _translations: {type: Object}
    };
  }

  constructor() {
    super();
    this._translations = {};
    this._loadedLanguages = new Set();
  }

  async setConfig(config) {
    if (!config) throw new Error("Invalid configuration");
    this._config = {
      ...config,
      entities: config.entities || [],
      pet_weight_entities: config.pet_weight_entities || [],
      use_metric: config.use_metric || false,
      language: config.language || "en"
    };
    
    // Load translations for the configured language
    await this._loadTranslations(this._config.language);
  }

  async _loadTranslations(language) {
    if (this._loadedLanguages.has(language)) return;
    
    try {
      const response = await fetch(`/local/litter-robot4-card/translations/${language}.json`);
      if (response.ok) {
        this._translations[language] = await response.json();
        this._loadedLanguages.add(language);
        console.debug(`Loaded translations for ${language}`);
      } else {
        console.warn(`Failed to load translations for ${language}, falling back to English`);
        if (language !== 'en') {
          await this._loadTranslations('en');
        }
      }
    } catch (error) {
      console.error(`Error loading translations for ${language}:`, error);
      // Fallback to hardcoded English translations
      this._translations[language] = {
        common: {
          title: "Litter-Robot 4",
          litter: "Litter",
          waste: "Waste",
          full: "Full",
          pet_weight: "Pet Weight",
          hopper: "Litter Hopper"
        },
        status: {
          br: "Bonnet Removed", ccc: "Clean Cycle Complete", ccp: "Clean Cycle In Progress",
          cd: "Clean Cycle Done", csf: "Cat Sensor Fault", csi: "Cat Sensor Interrupted",
          cst: "Cat Sensor Timing", df1: "Drawer Full (1)", df2: "Drawer Full (2)",
          dfs: "Drawer Full Sensor", dhf: "Drawer Hall Sensor Fault", dpf: "Drawer Position Fault",
          ec: "Error Condition", hpf: "Hall Position Fault", off: "Power Off", offline: "Offline",
          otf: "Over Torque Fault", p: "Paused", pd: "Pad Detect", pwrd: "Power Drained",
          pwru: "Power Up", rdy: "Ready", scf: "Sensor Contact Fault", sdf: "Sensor Drawer Fault",
          spf: "Sensor Position Fault"
        },
        hopper: {
          enabled: "Enabled", disabled: "Disabled", empty: "Empty",
          motor_fault_short: "Motor Fault (Short)", motor_ot_amps: "Motor Overcurrent",
          motor_disconnected: "Motor Disconnected"
        }
      };
      this._loadedLanguages.add(language);
    }
  }

  _(key) {
    const language = this._config?.language || "en";
    const keys = key.split(".");
    let translation = this._translations[language];
    
    if (!translation) {
      // Fallback to English if language not loaded
      translation = this._translations['en'];
    }
    
    for (const k of keys) {
      if (!translation || typeof translation !== "object") return key;
      translation = translation[k];
    }
    return translation || key;
  }

  getReadableStatus(status) {
    return this._(`status.${status}`) || `Unknown (${status})`;
  }

  getStatusColor(status) {
    return ["br", "df1", "df2", "dfs", "csf", "csi", "cst", "dhf", "dpf", "ec", "hpf", "scf", "sdf", "spf", "otf"].includes(status) ? "red" : ["p", "pwru", "pwrd", "pd"].includes(status) ? "yellow" : ["off", "offline"].includes(status) ? "gray" : ["rdy", "ccc", "cd"].includes(status) ? "blue" : ["ccp"].includes(status) ? "orange" : "gray";
  }

  getWasteColor(level) {
    return level <= 70 ? "green" : level <= 90 ? "yellow" : "red";
  }

  getLitterColor(level) {
    return level >= 70 ? "green" : level >= 40 ? "yellow" : "red";
  }

  _showMoreInfo(entityId) {
    if (!entityId) return;
    const event = new CustomEvent("hass-more-info", {detail: {entityId}, bubbles: true, composed: true});
    this.dispatchEvent(event);
  }

  convertWeight(weight) {
    if (!weight || isNaN(Number(weight))) return "";
    const weightNum = Number(weight);
    return this._config?.use_metric ? `${(weightNum * 0.453592).toFixed(1)} kg` : `${weightNum} lbs`;
  }

  _getHopperIcon(entityId) {
    const state = this.hass.states[entityId]?.state;
    switch (state) {
      case 'enabled':
        return 'green';
      case 'disabled':
        return 'gray';
      case 'empty':
        return 'yellow';
      case 'motor_fault_short':
      case 'motor_ot_amps':
      case 'motor_disconnected':
        return 'red';
      default:
        return 'gray';
    }
  }

  _getHopperState(entityId) {
    const state = this.hass.states[entityId]?.state;
    return this._(`hopper.${state}`) || state;
  }

  render() {
    if (!this.hass || !this._config) return html``;

    const [statusEntity, litterEntity, wasteEntity, hopperEntity] = (this._config.entities || []).map(entityId => entityId ? this.hass.states[entityId] : undefined);
    const petWeightEntities = (this._config.pet_weight_entities || []).map(entityId => entityId ? this.hass.states[entityId] : undefined).filter(entity => entity !== undefined);

    const litterLevel = Number(litterEntity?.state);
    const wasteLevel = Number(wasteEntity?.state);
    const litterDisplay = isNaN(litterLevel) ? "--" : `${Math.round(litterLevel)}%`;
    const wasteDisplay = isNaN(wasteLevel) ? "--" : `${Math.round(wasteLevel)}%`;
    const litterColor = isNaN(litterLevel) ? "red" : this.getLitterColor(litterLevel);
    const wasteColor = isNaN(wasteLevel) ? "red" : this.getWasteColor(wasteLevel);
    const statusText = this.getReadableStatus(statusEntity?.state || "");
    const statusColor = this.getStatusColor(statusEntity?.state || "");

    return html`
      <ha-card>
        <div class="title">${this._("common.title")}</div>

        <div class="status clickable" @click=${() => this._showMoreInfo(statusEntity?.entity_id || "")}>
          <div class="status-icon ${statusColor}"></div>
          <div class="label">${statusText}</div>
        </div>

        <div class="item clickable" @click=${() => this._showMoreInfo(litterEntity?.entity_id || "")}>
          <div class="icon ${litterColor}"></div>
          <div class="label">${this._("common.litter")}: ${litterDisplay}</div>
        </div>

        <div class="item clickable" @click=${() => this._showMoreInfo(wasteEntity?.entity_id || "")}>
          <div class="icon ${wasteColor}"></div>
          <div class="label">${this._("common.waste")}: ${wasteDisplay} ${this._("common.full")}</div>
        </div>

        ${hopperEntity ? html`
          <div class="item clickable" @click=${() => this._showMoreInfo(hopperEntity.entity_id)}>
            <div class="icon ${this._getHopperIcon(hopperEntity.entity_id)}"></div>
            <div class="label">${this._("common.hopper")}: ${this._getHopperState(hopperEntity.entity_id)}</div>
          </div>
        ` : ""}

        ${petWeightEntities.length > 0 ? html`
          <div class="pet-weights">
            ${petWeightEntities.map(entity => html`
              <div class="item clickable" @click=${() => this._showMoreInfo(entity.entity_id || "")}>
                <div class="icon blue"></div>
                <div class="label">${entity.attributes?.friendly_name || this._("common.pet_weight")}: ${this.convertWeight(entity.state || "")}</div>
              </div>
            `)}
          </div>
        ` : ""}
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      ha-card {
        padding: 16px;
        background: var(--card-background-color, white);
        color: var(--primary-text-color, white);
        border-radius: 12px;
        font-family: 'Segoe UI', sans-serif;
      }

      .title {
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 12px;
      }

      .status {
        display: flex;
        align-items: center;
        margin: 4px 0 12px 0;
      }

      .status-icon {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-right: 8px;
      }

      .item {
        display: flex;
        align-items: center;
        margin: 6px 0;
      }

      .icon {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-right: 8px;
      }

      .pet-weights {
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
      }

      .green { background-color: #4caf50; }
      .yellow { background-color: #ffc107; }
      .red { background-color: #f44336; }
      .blue { background-color: #00b0ff; }
      .orange { background-color: #ff9800; }
      .gray { background-color: #9e9e9e; }

      .label { font-size: 0.95rem; }

      .clickable {
        cursor: pointer;
      }
    `;
  }
}

class LitterRobot4Editor extends LitElement {
  static get properties() {
    return { hass: { type: Object }, config: { type: Object } };
  }

  setConfig(config) {
    this.config = config;
  }

  _valueChanged(ev, index) {
    if (!this.config || !this.hass) return;
    const target = ev.target;
    const configValue = target.value;
    
    if (this.config.entities) {
      this.config.entities[index] = configValue;
    }
    
    const event = new CustomEvent("config-changed", {
      detail: { config: this.config },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  render() {
    if (!this.hass || !this.config) {
      return html``;
    }

    const entities = this.config.entities || [];

    return html`
      <div class="card-config">
        <div class="entities">
          ${["Status Code Entity", "Litter Level Entity", "Waste Drawer Entity", "Litter Hopper Entity (optional)"].map((label, index) => html`
            <div class="entity">
              <ha-entity-picker
                .hass=${this.hass}
                .label=${label}
                .value=${entities[index] || ""}
                .includeDomains=${["sensor"]}
                .required=${index < 3}
                @value-changed=${(ev) => this._valueChanged(ev, index)}
              ></ha-entity-picker>
            </div>
          `)}
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      .card-config {
        padding: 16px;
      }
      .entity {
        margin-bottom: 12px;
      }
    `;
  }
}

try {
  console.debug("Defining custom elements...");
  customElements.define("litter-robot4-card", LitterRobot4Card);
  customElements.define("litter-robot4-editor", LitterRobot4Editor);
  console.debug("Custom elements defined successfully");
} catch (error) {
  console.error("Error defining custom elements:", error);
} 