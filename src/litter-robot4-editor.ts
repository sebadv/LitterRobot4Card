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
  `;

  protected render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    const entities = this._config.entities || [];
    const labels = ['Status Entity', 'Litter Level Entity', 'Waste Drawer Entity', 'Pet Weight Entity'];

    return html`
      <div class="entities">
        ${labels.map((label, index) => html`
          <div class="entity">
            <ha-entity-picker
              .hass=${this.hass}
              .label=${label}
              .value=${entities[index] || ''}
              .includeDomains=${['sensor']}
              .required=${index < 3}
              @value-changed=${(ev: CustomEvent) => this._valueChanged(ev, index)}
            ></ha-entity-picker>
          </div>
        `)}
      </div>
    `;
  }

  private _valueChanged(ev: CustomEvent, index: number): void {
    if (!this._config) {
      return;
    }

    const target = ev.target as any;
    if (!target) {
      return;
    }

    const newEntities = [...(this._config.entities || [])];
    newEntities[index] = ev.detail.value;

    // Ensure we have exactly 4 slots
    while (newEntities.length < 4) {
      newEntities.push('');
    }

    fireEvent(this, 'config-changed', {
      config: {
        ...this._config,
        entities: newEntities,
      },
    });
  }
}

// Note: Registration is now handled in the card file
// customElements.define('litter-robot4-editor', LitterRobot4Editor);
