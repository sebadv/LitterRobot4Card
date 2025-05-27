import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCardEditor } from 'custom-card-helpers';
import { LitterRobot4CardConfig } from './types';

@customElement('litter-robot4-editor')
export class LitterRobot4Editor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: LitterRobot4CardConfig;

  setConfig(config: LitterRobot4CardConfig) {
    this._config = {
      type: config.type || 'custom:litter-robot4-card',
      entities: config.entities || ['', '', '', ''],
      pet_weight_entities: config.pet_weight_entities || [],
      language: config.language || 'en',
      use_metric: config.use_metric || false
    };
  }

  static styles = css`
    :host { 
      display: block; 
      padding: 16px; 
      font-family: var(--paper-font-body1_-_font-family);
    }
    
    .config-section {
      margin-bottom: 24px;
    }
    
    .config-section h3 {
      margin: 0 0 12px 0;
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
    }
    
    .config-row {
      margin-bottom: 16px;
    }
    
    .config-label {
      display: block;
      margin-bottom: 4px;
      font-weight: 500;
      color: var(--primary-text-color);
    }
    
    .config-label.required::after {
      content: " *";
      color: var(--error-color, red);
    }
    
    ha-entity-picker, select { 
      display: block; 
      width: 100%; 
      margin-bottom: 16px; 
    }
    
    select {
      padding: 8px 12px;
      border: 1px solid var(--divider-color, #ccc);
      border-radius: 4px;
      background: var(--card-background-color, white);
      color: var(--primary-text-color, black);
      font-size: 14px;
      font-family: inherit;
    }
    
    input[type="checkbox"] {
      width: auto;
      margin-right: 8px;
    }
    
    select:focus, input:focus {
      outline: none;
      border-color: var(--primary-color, #03a9f4);
      box-shadow: 0 0 0 2px rgba(3, 169, 244, 0.2);
    }
    
    .checkbox-row {
      display: flex;
      align-items: center;
      font-weight: 500;
    }
  `;

  private _valueChanged(ev: CustomEvent) {
    const target = ev.target as any;
    const configValue = target.configValue;
    const value = ev.detail?.value ?? target.value;
    
    if (configValue.includes('.')) {
      // Handle nested properties like entities.0
      const [key, index] = configValue.split('.');
      const newArray = [...this._config[key as keyof LitterRobot4CardConfig] as string[]];
      newArray[parseInt(index)] = value;
      this._config = { ...this._config, [key]: newArray };
    } else {
      this._config = { ...this._config, [configValue]: value };
    }
    
    const event = new CustomEvent('config-changed', {
      detail: { config: this._config },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  render() {
    if (!this.hass || !this._config) return html`<div>Loading editor...</div>`;
    
    return html`
      <div class="config-section">
        <h3>Required Entities</h3>
        
        <div class="config-row">
          <label class="config-label required">Status Code Entity</label>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.entities[0]}
            .label="Status Code Entity"
            .configValue="entities.0"
            allow-custom-entity
            @value-changed=${this._valueChanged}
            @click=${(e:Event)=>e.stopPropagation()}
          ></ha-entity-picker>
        </div>

        <div class="config-row">
          <label class="config-label required">Litter Level Entity</label>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.entities[1]}
            .label="Litter Level Entity"
            .configValue="entities.1"
            allow-custom-entity
            @value-changed=${this._valueChanged}
            @click=${(e:Event)=>e.stopPropagation()}
          ></ha-entity-picker>
        </div>

        <div class="config-row">
          <label class="config-label required">Waste Drawer Entity</label>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.entities[2]}
            .label="Waste Drawer Entity"
            .configValue="entities.2"
            allow-custom-entity
            @value-changed=${this._valueChanged}
            @click=${(e:Event)=>e.stopPropagation()}
          ></ha-entity-picker>
        </div>

        <div class="config-row">
          <label class="config-label">Litter Hopper Entity (Optional)</label>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.entities[3]}
            .label="Litter Hopper Entity"
            .configValue="entities.3"
            allow-custom-entity
            @value-changed=${this._valueChanged}
            @click=${(e:Event)=>e.stopPropagation()}
          ></ha-entity-picker>
        </div>
      </div>

      <div class="config-section">
        <h3>Settings</h3>
        
        <div class="config-row">
          <label class="config-label">Language</label>
          <select
            .value=${this._config.language}
            .configValue="language"
            @change=${this._valueChanged}
            @click=${(e:Event)=>e.stopPropagation()}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="nl">Nederlands</option>
            <option value="fr">Français</option>
          </select>
        </div>

        <div class="config-row">
          <label class="checkbox-row">
            <input
              type="checkbox"
              .checked=${this._config.use_metric}
              .configValue="use_metric"
              @change=${this._valueChanged}
              @click=${(e:Event)=>e.stopPropagation()}
            />
            Use Metric Units (kg)
          </label>
        </div>
      </div>
    `;
  }
} 