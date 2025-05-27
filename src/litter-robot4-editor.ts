import { LitElement, html, css, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCardEditor, fireEvent } from 'custom-card-helpers';

interface Config {
  type: string;
  entities: string[];
  pet_weight_entities?: string[];
  language?: string;
  use_metric?: boolean;
}

@customElement('litter-robot4-editor')
export class LitterRobot4Editor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: Config;

  public setConfig(config: Config): void {
    this._config = {
      ...config,
      entities: config.entities || ['', '', '', ''],
      pet_weight_entities: config.pet_weight_entities || [],
      language: config.language || 'en',
      use_metric: config.use_metric || false,
    };
  }

  static get styles(): CSSResultGroup {
    return css`
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
      
      select, input[type="checkbox"] {
        width: 100%;
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
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) {
      return html`<div>Loading editor...</div>`;
    }

    const entities = Object.keys(this.hass.states).sort();

    return html`
      <div class="config-section">
        <h3>Required Entities</h3>
        
        <div class="config-row">
          <label class="config-label required">Status Code Entity</label>
          <select 
            .value=${this._config.entities[0] || ''}
            @change=${(e: Event) => this._handleEntityChange(e, 0)}
            @click=${(e: Event) => e.stopPropagation()}
          >
            <option value="">Select entity...</option>
            ${entities.map(entityId => {
              const entity = this.hass.states[entityId];
              const friendlyName = entity.attributes.friendly_name || entityId;
              return html`
                <option 
                  value=${entityId}
                  .selected=${this._config.entities[0] === entityId}
                >
                  ${friendlyName} (${entityId})
                </option>
              `;
            })}
          </select>
        </div>

        <div class="config-row">
          <label class="config-label required">Litter Level Entity</label>
          <select 
            .value=${this._config.entities[1] || ''}
            @change=${(e: Event) => this._handleEntityChange(e, 1)}
            @click=${(e: Event) => e.stopPropagation()}
          >
            <option value="">Select entity...</option>
            ${entities.map(entityId => {
              const entity = this.hass.states[entityId];
              const friendlyName = entity.attributes.friendly_name || entityId;
              return html`
                <option 
                  value=${entityId}
                  .selected=${this._config.entities[1] === entityId}
                >
                  ${friendlyName} (${entityId})
                </option>
              `;
            })}
          </select>
        </div>

        <div class="config-row">
          <label class="config-label required">Waste Drawer Entity</label>
          <select 
            .value=${this._config.entities[2] || ''}
            @change=${(e: Event) => this._handleEntityChange(e, 2)}
            @click=${(e: Event) => e.stopPropagation()}
          >
            <option value="">Select entity...</option>
            ${entities.map(entityId => {
              const entity = this.hass.states[entityId];
              const friendlyName = entity.attributes.friendly_name || entityId;
              return html`
                <option 
                  value=${entityId}
                  .selected=${this._config.entities[2] === entityId}
                >
                  ${friendlyName} (${entityId})
                </option>
              `;
            })}
          </select>
        </div>

        <div class="config-row">
          <label class="config-label">Litter Hopper Entity (Optional)</label>
          <select 
            .value=${this._config.entities[3] || ''}
            @change=${(e: Event) => this._handleEntityChange(e, 3)}
            @click=${(e: Event) => e.stopPropagation()}
          >
            <option value="">Select entity...</option>
            ${entities.map(entityId => {
              const entity = this.hass.states[entityId];
              const friendlyName = entity.attributes.friendly_name || entityId;
              return html`
                <option 
                  value=${entityId}
                  .selected=${this._config.entities[3] === entityId}
                >
                  ${friendlyName} (${entityId})
                </option>
              `;
            })}
          </select>
        </div>
      </div>

      <div class="config-section">
        <h3>Settings</h3>
        
        <div class="config-row">
          <label class="config-label">Language</label>
          <select 
            .value=${this._config.language || 'en'}
            @change=${this._handleLanguageChange}
            @click=${(e: Event) => e.stopPropagation()}
          >
            <option value="en" .selected=${this._config.language === 'en'}>English</option>
            <option value="es" .selected=${this._config.language === 'es'}>Español</option>
            <option value="nl" .selected=${this._config.language === 'nl'}>Nederlands</option>
            <option value="fr" .selected=${this._config.language === 'fr'}>Français</option>
          </select>
        </div>

        <div class="config-row">
          <label class="checkbox-row">
            <input 
              type="checkbox" 
              .checked=${this._config.use_metric || false}
              @change=${this._handleMetricChange}
              @click=${(e: Event) => e.stopPropagation()}
            >
            Use Metric Units (kg)
          </label>
        </div>
      </div>
    `;
  }

  private _handleEntityChange(e: Event, index: number): void {
    const target = e.target as HTMLSelectElement;
    const newEntities = [...this._config.entities];
    newEntities[index] = target.value;
    
    this._updateConfig({ entities: newEntities });
  }

  private _handleLanguageChange(e: Event): void {
    const target = e.target as HTMLSelectElement;
    this._updateConfig({ language: target.value });
  }

  private _handleMetricChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this._updateConfig({ use_metric: target.checked });
  }

  private _updateConfig(updates: Partial<Config>): void {
    this._config = { ...this._config, ...updates };
    
    fireEvent(this, 'config-changed', { config: this._config });
  }
} 