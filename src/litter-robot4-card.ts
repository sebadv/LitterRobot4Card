import { LitElement, html, css } from 'lit';
import { HomeAssistant, LovelaceCardConfig } from 'custom-card-helpers';
import { LitterRobot4Editor } from './litter-robot4-editor';

interface LitterRobot4Config extends LovelaceCardConfig {
  type: string;
  entities?: string[];
  use_metric?: boolean;
}

// Register card in the custom cards list
console.info(
  '%c LITTER-ROBOT-4-CARD %c 1.0.0 ',
  'color: white; background: #4caf50; font-weight: 700;',
  'color: #4caf50; background: white; font-weight: 700;',
);

class LitterRobot4Card extends LitElement {
  public static async getConfigElement() {
    await customElements.whenDefined('litter-robot4-editor');
    const editor = document.createElement('litter-robot4-editor');
    return editor;
  }

  public static getStubConfig() {
    return {
      type: 'custom:litter-robot4-card',
      entities: ['', '', '', '']
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
      use_metric: config.use_metric || false
    };
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
    const map: Record<string, string> = {
      br: 'Bonnet Removed', ccc: 'Clean Cycle Complete', ccp: 'Clean Cycle In Progress',
      cd: 'Clean Cycle Done', csf: 'Cat Sensor Fault', csi: 'Cat Sensor Interrupted',
      cst: 'Cat Sensor Timing', df1: 'Drawer Full (1)', df2: 'Drawer Full (2)',
      dfs: 'Drawer Full Sensor', dhf: 'Drawer Hall Sensor Fault', dpf: 'Drawer Position Fault',
      ec: 'Error Condition', hpf: 'Hall Position Fault', off: 'Power Off', offline: 'Offline',
      otf: 'Over Torque Fault', p: 'Paused', pd: 'Pad Detect', pwrd: 'Power Drained',
      pwru: 'Power Up', rdy: 'Ready', scf: 'Sensor Contact Fault',
      sdf: 'Sensor Drawer Fault', spf: 'Sensor Position Fault'
    };
    return map[code] ?? `Unknown (${code})`;
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

    const [status, litter, waste, weight] = (this._config.entities || []).map(
      (id: string) => id ? this.hass!.states[id] : undefined
    );

    const litterNum = Number(litter?.state);
    const wasteNum = Number(waste?.state);

    const litterValue = !isNaN(litterNum) ? `${Math.round(litterNum)}%` : '--';
    const wasteValue = !isNaN(wasteNum) ? `${Math.round(wasteNum)}%` : '--';
    const weightValue = weight?.state ? this.convertWeight(weight.state) : '';

    const litterColor = !isNaN(litterNum) ? this.getLitterColor(litterNum) : 'red';
    const wasteColor = !isNaN(wasteNum) ? this.getWasteColor(wasteNum) : 'red';

    const readableStatus = this.getReadableStatus(status?.state ?? '');
    const statusColor = this.getStatusColor(status?.state ?? '');

    return html`
      <ha-card>
        <div class="title">Litter-Robot 4</div>

        <div class="status clickable" @click=${() => this._showMoreInfo(status?.entity_id || '')}>
          <div class="status-icon ${statusColor}"></div>
          <div class="label">${readableStatus}</div>
        </div>

        <div class="item clickable" @click=${() => this._showMoreInfo(litter?.entity_id || '')}>
          <div class="icon ${litterColor}"></div>
          <div class="label">Litter: ${litterValue}</div>
        </div>

        <div class="item clickable" @click=${() => this._showMoreInfo(waste?.entity_id || '')}>
          <div class="icon ${wasteColor}"></div>
          <div class="label">Waste: ${wasteValue} Full</div>
        </div>

        ${weight ? html`
          <div class="item clickable" @click=${() => this._showMoreInfo(weight?.entity_id || '')}>
            <div class="icon blue"></div>
            <div class="label">Pet Weight: ${weightValue}</div>
          </div>` : ''}
      </ha-card>
    `;
  }
}

// Register both card and editor
customElements.define('litter-robot4-card', LitterRobot4Card);
customElements.define('litter-robot4-editor', LitterRobot4Editor);

// Add to custom cards list for visual picker
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: "litter-robot4-card",
  name: "Litter-Robot 4 Card",
  description: "A custom card to show Litter-Robot 4 status",
  preview: true
});
