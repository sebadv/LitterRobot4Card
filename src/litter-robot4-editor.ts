import { LitElement, html, css } from 'lit';
import { HomeAssistant, fireEvent } from 'custom-card-helpers';

export class LitterRobot4Editor extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      _config: { type: Object }
    };
  }

  public hass?: HomeAssistant;
  private _config?: any;

  public setConfig(config: any): void {
    this._config = config;
  }

  static styles = css`
    .entities {
      padding: 8px;
    }
    .entity {
      display: block;
      margin-bottom: 16px;
    }
    ha-entity-picker {
      display: block;
    }
    .option {
      padding: 8px;
      display: flex;
      align-items: center;
    }
    .option ha-switch {
      margin-right: 8px;
    }
    .pet-weights {
      border-top: 1px solid var(--divider-color, #e8e8e8);
      margin-top: 16px;
      padding-top: 16px;
    }
    .pet-weight-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    .add-pet-button {
      cursor: pointer;
      border: none;
      border-radius: 4px;
      background: var(--primary-color);
      color: var(--text-primary-color);
      padding: 4px 8px;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 16px;
    }
    ha-select {
      width: 100%;
    }
  `;

  protected render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    const mainEntities = this._config.entities || [];
    const petWeightEntities = this._config.pet_weight_entities || [];
    const mainLabels = ['Status Code Entity', 'Litter Level Entity', 'Waste Drawer Entity'];

    return html`
      <div class="entities">
        ${mainLabels.map((label, index) => html`
          <div class="entity">
            <ha-entity-picker
              .hass=${this.hass}
              .label=${label}
              .value=${mainEntities[index] || ''}
              .includeDomains=${['sensor']}
              .required=${true}
              @value-changed=${(ev: CustomEvent) => this._valueChanged(ev, index)}
            ></ha-entity-picker>
          </div>
        `)}
        
        <div class="pet-weights">
          <div class="pet-weight-header">
            <span>Pet Weight Entities</span>
            <button class="add-pet-button" @click=${this._addPetWeight}>
              Add Pet
            </button>
          </div>
          ${petWeightEntities.map((entity: string, index: number) => html`
            <div class="entity">
              <ha-entity-picker
                .hass=${this.hass}
                .label=${entity && this.hass?.states[entity]?.attributes?.friendly_name || 'Pet Weight'}
                .value=${entity}
                .includeDomains=${['sensor']}
                @value-changed=${(ev: CustomEvent) => this._petWeightChanged(ev, index)}
              ></ha-entity-picker>
            </div>
          `)}
        </div>
        
        <div class="row">
          <ha-select
            .label=${'Language'}
            .value=${this._config.language || 'en'}
            @value-changed=${this._languageChanged}
          >
            <ha-list-item value="en">English</ha-list-item>
            <ha-list-item value="es">Español</ha-list-item>
            <ha-list-item value="nl">Nederlands</ha-list-item>
            <ha-list-item value="fr">Français</ha-list-item>
          </ha-select>

          <ha-formfield .label=${'Use Metric Units'}>
            <ha-switch
              .checked=${this._config.use_metric || false}
              @change=${this._metricChanged}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>
    `;
  }

  private _valueChanged(ev: CustomEvent, index: number): void {
    if (!this._config) return;

    const target = ev.target as any;
    if (!target) return;

    const newEntities = [...(this._config.entities || [])];
    newEntities[index] = ev.detail.value;

    // Ensure we have exactly 3 slots for main entities
    while (newEntities.length < 3) {
      newEntities.push('');
    }

    fireEvent(this, 'config-changed', {
      config: {
        ...this._config,
        entities: newEntities,
      },
    });
  }

  private _petWeightChanged(ev: CustomEvent, index: number): void {
    if (!this._config) return;

    const target = ev.target as any;
    if (!target) return;

    const newPetWeights = [...(this._config.pet_weight_entities || [])];
    
    if (ev.detail.value) {
      newPetWeights[index] = ev.detail.value;
    } else {
      // Remove empty entries
      newPetWeights.splice(index, 1);
    }

    fireEvent(this, 'config-changed', {
      config: {
        ...this._config,
        pet_weight_entities: newPetWeights,
      },
    });
  }

  private _addPetWeight(): void {
    if (!this._config) return;

    const newPetWeights = [...(this._config.pet_weight_entities || []), ''];

    fireEvent(this, 'config-changed', {
      config: {
        ...this._config,
        pet_weight_entities: newPetWeights,
      },
    });
  }

  private _languageChanged(ev: CustomEvent) {
    if (!this._config || !ev.detail) {
      return;
    }

    this._updateConfig({ language: ev.detail.value });
  }

  private _metricChanged(ev: CustomEvent) {
    if (!this._config || !ev.target) {
      return;
    }

    this._updateConfig({ use_metric: (ev.target as any).checked });
  }

  private _updateConfig(update: any) {
    const newConfig = {
      ...this._config,
      ...update,
    };

    const event = new CustomEvent('config-changed', {
      detail: { config: newConfig },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

// Note: Registration is now handled in the card file
// customElements.define('litter-robot4-editor', LitterRobot4Editor);
