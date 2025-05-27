/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement, html, css } from 'lit';
// Translation variables
var ht = {title: "Litter-Robot 4", litter: "Litter", waste: "Waste", full: "Full", pet_weight: "Pet Weight", hopper: "Litter Hopper"};
var hopper_en = {enabled: "Enabled", disabled: "Disabled", empty: "Empty", motor_fault_short: "Motor Fault (Short)", motor_ot_amps: "Motor Overcurrent", motor_disconnected: "Motor Disconnected"};
var ut = {br: "Bonnet Removed", ccc: "Clean Cycle Complete", ccp: "Clean Cycle In Progress", cd: "Clean Cycle Done", csf: "Cat Sensor Fault", csi: "Cat Sensor Interrupted", cst: "Cat Sensor Timing", df1: "Drawer Full (1)", df2: "Drawer Full (2)", dfs: "Drawer Full Sensor", dhf: "Drawer Hall Sensor Fault", dpf: "Drawer Position Fault", ec: "Error Condition", hpf: "Hall Position Fault", off: "Power Off", offline: "Offline", otf: "Over Torque Fault", p: "Paused", pd: "Pad Detect", pwrd: "Power Drained", pwru: "Power Up", rdy: "Ready", scf: "Sensor Contact Fault", sdf: "Sensor Drawer Fault", spf: "Sensor Position Fault"};
var pt = {status_entity: "Status Entity", litter_entity: "Litter Level Entity", waste_entity: "Waste Drawer Entity", pet_weight_entity: "Pet Weight Entity", language: "Language", use_metric: "Use Metric Units"};
var gt = {common: ht, status: ut, editor: pt};
var ft = {title: "Litter-Robot 4", litter: "Arena", waste: "Residuos", full: "Lleno", pet_weight: "Peso de Mascota", hopper: "Tolva de Arena"};
var hopper_es = {enabled: "Activado", disabled: "Desactivado", empty: "Vacío", motor_fault_short: "Fallo del Motor (Corto)", motor_ot_amps: "Sobrecorriente del Motor", motor_disconnected: "Motor Desconectado"};
var _t = {br: "Cubierta Removida", ccc: "Ciclo de Limpieza Completo", ccp: "Ciclo de Limpieza en Progreso", cd: "Ciclo de Limpieza Terminado", csf: "Fallo del Sensor de Gato", csi: "Sensor de Gato Interrumpido", cst: "Tiempo del Sensor de Gato", df1: "Cajón Lleno (1)", df2: "Cajón Lleno (2)", dfs: "Sensor de Cajón Lleno", dhf: "Fallo del Sensor Hall del Cajón", dpf: "Fallo de Posición del Cajón", ec: "Condición de Error", hpf: "Fallo de Posición Hall", off: "Apagado", offline: "Desconectado", otf: "Fallo de Sobretorque", p: "Pausado", pd: "Detección de Almohadilla", pwrd: "Batería Agotada", pwru: "Encendiendo", rdy: "Listo", scf: "Fallo de Contacto del Sensor", sdf: "Fallo del Sensor del Cajón", spf: "Fallo de Posición del Sensor"};
var mt = {status_entity: "Entidad de Estado", litter_entity: "Entidad de Nivel de Arena", waste_entity: "Entidad del Cajón de Residuos", pet_weight_entity: "Entidad de Peso de Mascota", language: "Idioma", use_metric: "Usar Unidades Métricas"};
var $t = {common: ft, status: _t, editor: mt};
var vt = {title: "Litter-Robot 4", litter: "Kattengrit", waste: "Afval", full: "Vol", pet_weight: "Huisdier Gewicht", hopper: "Kattenbak Hopper"};
var hopper_nl = {enabled: "Ingeschakeld", disabled: "Uitgeschakeld", empty: "Leeg", motor_fault_short: "Motor Fout (Kortsluiting)", motor_ot_amps: "Motor Overstroom", motor_disconnected: "Motor Losgekoppeld"};
var yt = {br: "Kap Verwijderd", ccc: "Reinigingscyclus Voltooid", ccp: "Reinigingscyclus Bezig", cd: "Reinigingscyclus Klaar", csf: "Katsensor Fout", csi: "Katsensor Onderbroken", cst: "Katsensor Timing", df1: "Lade Vol (1)", df2: "Lade Vol (2)", dfs: "Lade Vol Sensor", dhf: "Lade Hall Sensor Fout", dpf: "Lade Positie Fout", ec: "Foutconditie", hpf: "Hall Positie Fout", off: "Uitgeschakeld", offline: "Offline", otf: "Overbelasting Fout", p: "Gepauzeerd", pd: "Pad Gedetecteerd", pwrd: "Batterij Leeg", pwru: "Opstarten", rdy: "Gereed", scf: "Sensor Contact Fout", sdf: "Sensor Lade Fout", spf: "Sensor Positie Fout"};
var bt = {status_entity: "Status Entiteit", litter_entity: "Kattengrit Niveau Entiteit", waste_entity: "Afval Lade Entiteit", pet_weight_entity: "Huisdier Gewicht Entiteit", language: "Taal", use_metric: "Gebruik Metrische Eenheden"};
var wt = {common: vt, status: yt, editor: bt};
var At = {title: "Litter-Robot 4", litter: "Litière", waste: "Déchets", full: "Plein", pet_weight: "Poids de l'Animal", hopper: "Trémie de Litière"};
var hopper_fr = {enabled: "Activé", disabled: "Désactivé", empty: "Vide", motor_fault_short: "Défaut Moteur (Court-circuit)", motor_ot_amps: "Surcharge Moteur", motor_disconnected: "Moteur Déconnecté"};
var Ct = {br: "Capot Retiré", ccc: "Cycle de Nettoyage Terminé", ccp: "Cycle de Nettoyage en Cours", cd: "Cycle de Nettoyage Terminé", csf: "Défaut Capteur Chat", csi: "Capteur Chat Interrompu", cst: "Temporisation Capteur Chat", df1: "Tiroir Plein (1)", df2: "Tiroir Plein (2)", dfs: "Capteur Tiroir Plein", dhf: "Défaut Capteur Hall Tiroir", dpf: "Défaut Position Tiroir", ec: "Condition d'Erreur", hpf: "Défaut Position Hall", off: "Éteint", offline: "Hors Ligne", otf: "Défaut Surcouple", p: "En Pause", pd: "Détection Tapis", pwrd: "Batterie Épuisée", pwru: "Démarrage", rdy: "Prêt", scf: "Défaut Contact Capteur", sdf: "Défaut Capteur Tiroir", spf: "Défaut Position Capteur"};
var Et = {status_entity: "Entité État", litter_entity: "Entité Niveau Litière", waste_entity: "Entité Tiroir Déchets", pet_weight_entity: "Entité Poids Animal", language: "Langue", use_metric: "Utiliser Unités Métriques"};
var St = {common: At, status: Ct, editor: Et};

const Pt = {
  en: Object.freeze({__proto__: null, common: ht, status: ut, hopper: hopper_en, editor: pt, default: gt}),
  es: Object.freeze({__proto__: null, common: ft, status: _t, hopper: hopper_es, editor: mt, default: $t}),
  nl: Object.freeze({__proto__: null, common: vt, status: yt, hopper: hopper_nl, editor: bt, default: wt}),
  fr: Object.freeze({__proto__: null, common: At, status: Ct, hopper: hopper_fr, editor: Et, default: St})
};
console.debug("Registering Litter-Robot 4 Card..."), console.info("%c LITTER-ROBOT-4-CARD %c v1.0.10 ", "color: white; background: #4caf50; font-weight: 700;", "color: #4caf50; background: white; font-weight: 700;");
try {
  console.debug("Adding to custom cards list..."), window.customCards = window.customCards || [], window.customCards.push({type: "litter-robot4-card", name: "Litter-Robot 4 Card", description: "A custom card to show Litter-Robot 4 status", preview: true}), console.debug("Added to custom cards list successfully");
} catch (t) {
  console.error("Error adding to custom cards list:", t);
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
    return {hass: {type: Object}, _config: {type: Object}};
  }
  setConfig(t) {
    if (!t) throw new Error("Invalid configuration");
    this._config = {
      ...t,
      entities: t.entities || [],
      pet_weight_entities: t.pet_weight_entities || [],
      use_metric: t.use_metric || false,
      language: t.language || "en"
    };
  }
  _(t) {
    const language = this._config?.language || "en";
    const keys = t.split(".");
    let translation = Pt[language];
    for (const k of keys) {
      if (!translation || typeof translation !== "object") return t;
      translation = translation[k];
    }
    return translation || t;
  }
  getReadableStatus(t) {
    return this._(`status.${t}`) || `Unknown (${t})`;
  }
  getStatusColor(t) {
    return ["br", "df1", "df2", "dfs", "csf", "csi", "cst", "dhf", "dpf", "ec", "hpf", "scf", "sdf", "spf", "otf"].includes(t) ? "red" : ["p", "pwru", "pwrd", "pd"].includes(t) ? "yellow" : ["off", "offline"].includes(t) ? "gray" : ["rdy", "ccc", "cd"].includes(t) ? "blue" : ["ccp"].includes(t) ? "orange" : "gray";
  }
  getWasteColor(t) {
    return t <= 70 ? "green" : t <= 90 ? "yellow" : "red";
  }
  getLitterColor(t) {
    return t >= 70 ? "green" : t >= 40 ? "yellow" : "red";
  }
  _showMoreInfo(t) {
    if (!t) return;
    const e = new CustomEvent("hass-more-info", {detail: {entityId: t}, bubbles: true, composed: true});
    this.dispatchEvent(e);
  }
  convertWeight(t) {
    if (!t || isNaN(Number(t))) return "";
    const i = Number(t);
    return this._config?.use_metric ? `${(0.453592 * i).toFixed(1)} kg` : `${i} lbs`;
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
