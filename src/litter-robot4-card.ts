import { LitElement, html, css } from 'lit';
import { HomeAssistant, LovelaceCardConfig } from 'custom-card-helpers';
import { LitterRobot4Editor } from './litter-robot4-editor';

// Import translations
import * as en from './translations/en.json';
import * as es from './translations/es.json';
import * as nl from './translations/nl.json';
import * as fr from './translations/fr.json';

const TRANSLATIONS: { [key: string]: any } = {
  en: en,
  es: es,
  nl: nl,
  fr: fr,
};

// Debug logging
console.debug('Registering Litter-Robot 4 Card...');

// Register card in the custom cards list
console.info(
  '%c LITTER-ROBOT-4-CARD %c v1.0.5 ',
  'color: white; background: #4caf50; font-weight: 700;',
  'color: #4caf50; background: white; font-weight: 700;',
);

// Add to custom cards list for visual pickerswlxxxxl
try {
  console.debug('Adding to custom cards list...');
  (window as any).customCards = (window as any).customCards || [];
  (window as any).customCards.push({
    type: "litter-robot4-card",
    name: "Litter-Robot 4 Card",
    description: "A custom card to show Litter-Robot 4 status",
    preview: true
  });
  console.debug('Added to custom cards list successfully');
} catch (error) {
  console.error('Error adding to custom cards list:', error);
}

interface LitterRobot4Config extends LovelaceCardConfig {
  type: string;
  entities?: string[];
  pet_weight_entities?: string[];
  use_metric?: boolean;
  language?: string;
}

class LitterRobot4Card extends LitElement {
  public static async getConfigElement() {
    await customElements.whenDefined('litter-robot4-editor');
    const editor = document.createElement('litter-robot4-editor');
    return editor;
  }

  public static getStubConfig() {
    return {
      type: 'custom:litter-robot4-card',
      entities: ['', '', ''],
      pet_weight_entities: [],
      language: 'en'
    };
  }

  static get properties() {
    return {
      hass: { type: Object },
      _config: { type: Object },
    };
  }

  private _config?: LitterRobot4Config;
  public hass?: HomeAssistant;

  public setConfig(config: LitterRobot4Config): void {
    if (!config) {
      throw new Error('Invalid configuration');
    }
    this._config = {
      ...config,
      entities: config.entities || [],
      pet_weight_entities: config.pet_weight_entities || [],
      use_metric: config.use_metric || false,
      language: config.language || 'en'
    };
  }

  private _(key: string): string {
    const lang = this._config?.language || 'en';
    const parts = key.split('.');
    let result = TRANSLATIONS[lang];
    for (const part of parts) {
      if (result && typeof result === 'object') {
        result = result[part];
      } else {
        return key;
      }
    }
    return result || key;
  }

  static styles = css`
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

  private getReadableStatus(code: string): string {
    return this._(`status.${code}`) || `Unknown (${code})`;
  }

  private getStatusColor(code: string): string {
    const red = ['br','df1','df2','dfs','csf','csi','cst','dhf','dpf','ec','hpf','scf','sdf','spf','otf'];
    const yellow = ['p','pwru','pwrd','pd'];
    const gray = ['off','offline'];
    const blue = ['rdy','ccc','cd'];
    const orange = ['ccp'];
    if (red.includes(code)) return 'red';
    if (yellow.includes(code)) return 'yellow';
    if (gray.includes(code)) return 'gray';
    if (blue.includes(code)) return 'blue';
    if (orange.includes(code)) return 'orange';
    return 'gray';
  }

  private getWasteColor(value: number): string {
    if (value <= 70) return 'green';
    if (value <= 90) return 'yellow';
    return 'red';
  }

  private getLitterColor(value: number): string {
    if (value >= 70) return 'green';
    if (value >= 40) return 'yellow';
    return 'red';
  }

  private _showMoreInfo(entityId: string) {
    if (!entityId) return;
    const event = new CustomEvent('hass-more-info', {
      detail: { entityId },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  private convertWeight(value: string): string {
    if (!value || isNaN(Number(value))) return '';
    const weight = Number(value);
    return this._config?.use_metric 
      ? `${(weight * 0.453592).toFixed(1)} kg`
      : `${weight} lbs`;
  }

  protected render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    const [status, litter, waste] = (this._config.entities || []).map(
      (id: string) => id ? this.hass!.states[id] : undefined
    );

    const petWeights = (this._config.pet_weight_entities || [])
      .map(id => id ? this.hass!.states[id] : undefined)
      .filter(state => state !== undefined);

    const litterNum = Number(litter?.state);
    const wasteNum = Number(waste?.state);

    const litterValue = !isNaN(litterNum) ? `${Math.round(litterNum)}%` : '--';
    const wasteValue = !isNaN(wasteNum) ? `${Math.round(wasteNum)}%` : '--';

    const litterColor = !isNaN(litterNum) ? this.getLitterColor(litterNum) : 'red';
    const wasteColor = !isNaN(wasteNum) ? this.getWasteColor(wasteNum) : 'red';

    const readableStatus = this.getReadableStatus(status?.state ?? '');
    const statusColor = this.getStatusColor(status?.state ?? '');

    return html`
      <ha-card>
        <div class="title">${this._('common.title')}</div>

        <div class="status clickable" @click=${() => this._showMoreInfo(status?.entity_id || '')}>
          <div class="status-icon ${statusColor}"></div>
          <div class="label">${readableStatus}</div>
        </div>

        <div class="item clickable" @click=${() => this._showMoreInfo(litter?.entity_id || '')}>
          <div class="icon ${litterColor}"></div>
          <div class="label">${this._('common.litter')}: ${litterValue}</div>
        </div>

        <div class="item clickable" @click=${() => this._showMoreInfo(waste?.entity_id || '')}>
          <div class="icon ${wasteColor}"></div>
          <div class="label">${this._('common.waste')}: ${wasteValue} ${this._('common.full')}</div>
        </div>

        ${petWeights.length > 0 ? html`
          <div class="pet-weights">
            ${petWeights.map(weight => html`
              <div class="item clickable" @click=${() => this._showMoreInfo(weight?.entity_id || '')}>
                <div class="icon blue"></div>
                <div class="label">${weight?.attributes?.friendly_name || this._('common.pet_weight')}: ${this.convertWeight(weight?.state || '')}</div>
              </div>
            `)}
          </div>
        ` : ''}
      </ha-card>
    `;
  }
}

// Register both card and editor
try {
  console.debug('Defining custom elements...');
  customElements.define('litter-robot4-card', LitterRobot4Card);
  customElements.define('litter-robot4-editor', LitterRobot4Editor);
  console.debug('Custom elements defined successfully');
} catch (error) {
  console.error('Error defining custom elements:', error);
}
