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
        
        <div class="option">
          <ha-switch
            .checked=${this._config.use_metric || false}
            @change=${this._toggleMetric}
          ></ha-switch>
          <span>Use Metric Units (kg)</span>
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

  private _toggleMetric(ev: Event): void {
    const target = ev.target as any;
    if (!target || !this._config) return;

    fireEvent(this, 'config-changed', {
      config: {
        ...this._config,
        use_metric: target.checked,
      },
    });
  }
}

// Note: Registration is now handled in the card file
// customElements.define('litter-robot4-editor', LitterRobot4Editor);
