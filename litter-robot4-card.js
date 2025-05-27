/**
 * @license
 * Litter-Robot 4 Card for Home Assistant
 * Compatible with Home Assistant's frontend without external dependencies
 */

console.debug("Registering Litter-Robot 4 Card...");
console.info("%c LITTER-ROBOT-4-CARD %c Loaded ", "color: white; background: #4caf50; font-weight: 700;", "color: #4caf50; background: white; font-weight: 700;");

// Wait for Home Assistant to be ready
const waitForHass = () => {
  return new Promise((resolve) => {
    if (window.customCards) {
      resolve();
    } else {
      const checkInterval = setInterval(() => {
        if (window.customCards) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 100);
    }
  });
};

// Register with Home Assistant's custom cards registry
const registerCard = async () => {
  try {
    await waitForHass();
    console.debug("Adding to custom cards list...");
    window.customCards = window.customCards || [];
    
    // Check if already registered to avoid duplicates
    const existingCard = window.customCards.find(card => card.type === "litter-robot4-card");
    if (!existingCard) {
      window.customCards.push({
        type: "litter-robot4-card", 
        name: "Litter-Robot 4 Card", 
        description: "A custom card to show Litter-Robot 4 status with litter level, waste drawer, and optional hopper support", 
        preview: true,
        documentationURL: "https://github.com/sebadv/LitterRobot4Card"
      });
      console.debug("Added to custom cards list successfully");
    } else {
      console.debug("Card already registered in custom cards list");
    }
  } catch (error) {
    console.error("Error adding to custom cards list:", error);
  }
};

class LitterRobot4Card extends HTMLElement {
  constructor() {
    super();
    this._config = {};
    this._hass = {};
    
    // Embedded translations following best practices of successful HACS cards
    this._translations = {
      en: {
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
      },
      es: {
        common: {
          title: "Litter-Robot 4",
          litter: "Arena",
          waste: "Residuos",
          full: "Lleno",
          pet_weight: "Peso de Mascota",
          hopper: "Tolva de Arena"
        },
        status: {
          br: "Capó Removido", ccc: "Ciclo de Limpieza Completo", ccp: "Ciclo de Limpieza en Progreso",
          cd: "Ciclo de Limpieza Terminado", csf: "Falla del Sensor del Gato", csi: "Sensor del Gato Interrumpido",
          cst: "Tiempo del Sensor del Gato", df1: "Cajón Lleno (1)", df2: "Cajón Lleno (2)",
          dfs: "Sensor de Cajón Lleno", dhf: "Falla del Sensor Hall del Cajón", dpf: "Falla de Posición del Cajón",
          ec: "Condición de Error", hpf: "Falla de Posición Hall", off: "Apagado", offline: "Desconectado",
          otf: "Falla de Sobretorque", p: "Pausado", pd: "Detección de Almohadilla", pwrd: "Energía Agotada",
          pwru: "Encendido", rdy: "Listo", scf: "Falla de Contacto del Sensor", sdf: "Falla del Sensor del Cajón",
          spf: "Falla de Posición del Sensor"
        },
        hopper: {
          enabled: "Habilitado", disabled: "Deshabilitado", empty: "Vacío",
          motor_fault_short: "Falla del Motor (Corto)", motor_ot_amps: "Sobrecorriente del Motor",
          motor_disconnected: "Motor Desconectado"
        }
      },
      nl: {
        common: {
          title: "Litter-Robot 4",
          litter: "Kattenbakvulling",
          waste: "Afval",
          full: "Vol",
          pet_weight: "Huisdiergewicht",
          hopper: "Vulling Hopper"
        },
        status: {
          br: "Kap Verwijderd", ccc: "Reinigingscyclus Voltooid", ccp: "Reinigingscyclus Bezig",
          cd: "Reinigingscyclus Klaar", csf: "Katsensor Fout", csi: "Katsensor Onderbroken",
          cst: "Katsensor Timing", df1: "Lade Vol (1)", df2: "Lade Vol (2)",
          dfs: "Lade Vol Sensor", dhf: "Lade Hall Sensor Fout", dpf: "Lade Positie Fout",
          ec: "Foutconditie", hpf: "Hall Positie Fout", off: "Uitgeschakeld", offline: "Offline",
          otf: "Overkoppel Fout", p: "Gepauzeerd", pd: "Pad Detectie", pwrd: "Stroom Leeg",
          pwru: "Opstarten", rdy: "Klaar", scf: "Sensor Contact Fout", sdf: "Sensor Lade Fout",
          spf: "Sensor Positie Fout"
        },
        hopper: {
          enabled: "Ingeschakeld", disabled: "Uitgeschakeld", empty: "Leeg",
          motor_fault_short: "Motor Fout (Kort)", motor_ot_amps: "Motor Overstroom",
          motor_disconnected: "Motor Losgekoppeld"
        }
      },
      fr: {
        common: {
          title: "Litter-Robot 4",
          litter: "Litière",
          waste: "Déchets",
          full: "Plein",
          pet_weight: "Poids de l'Animal",
          hopper: "Trémie à Litière"
        },
        status: {
          br: "Capot Retiré", ccc: "Cycle de Nettoyage Terminé", ccp: "Cycle de Nettoyage en Cours",
          cd: "Cycle de Nettoyage Fini", csf: "Défaut Capteur Chat", csi: "Capteur Chat Interrompu",
          cst: "Timing Capteur Chat", df1: "Tiroir Plein (1)", df2: "Tiroir Plein (2)",
          dfs: "Capteur Tiroir Plein", dhf: "Défaut Capteur Hall Tiroir", dpf: "Défaut Position Tiroir",
          ec: "Condition d'Erreur", hpf: "Défaut Position Hall", off: "Éteint", offline: "Hors Ligne",
          otf: "Défaut Surtorque", p: "En Pause", pd: "Détection Coussin", pwrd: "Alimentation Épuisée",
          pwru: "Mise sous Tension", rdy: "Prêt", scf: "Défaut Contact Capteur", sdf: "Défaut Capteur Tiroir",
          spf: "Défaut Position Capteur"
        },
        hopper: {
          enabled: "Activé", disabled: "Désactivé", empty: "Vide",
          motor_fault_short: "Défaut Moteur (Court)", motor_ot_amps: "Surintensité Moteur",
          motor_disconnected: "Moteur Déconnecté"
        }
      }
    };
  }

  static async getConfigElement() {
    // Ensure the editor element is defined with better error handling
    const maxAttempts = 50;
    let attempts = 0;
    
    while (attempts < maxAttempts) {
      if (customElements.get("litter-robot4-editor")) {
        console.debug("Editor element found, returning it");
        return document.createElement("litter-robot4-editor");
      }
      
      attempts++;
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    console.error("Editor element not found after maximum attempts");
    throw new Error("Editor element not available");
  }

  static getStubConfig() {
    return {
      type: "custom:litter-robot4-card", 
      entities: ["", "", "", ""], 
      pet_weight_entities: [], 
      language: "en"
    };
  }

  set hass(hass) {
    this._hass = hass;
    this._updateContent();
  }

  get hass() {
    return this._hass;
  }

  async setConfig(config) {
    if (!config) throw new Error("Invalid configuration");
    this._config = {
      type: "custom:litter-robot4-card",
      entities: config.entities || ["", "", "", ""],
      pet_weight_entities: config.pet_weight_entities || [],
      use_metric: config.use_metric || false,
      language: config.language || "en"
    };
    
    // Only update content if hass is ready
    if (this._hass && this._hass.states) {
      this._updateContent();
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
    const state = this._hass.states[entityId]?.state;
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
    const state = this._hass.states[entityId]?.state;
    return this._(`hopper.${state}`) || state;
  }

  _updateContent() {
    if (!this._hass || !this._hass.states || !this._config) return;

    const [statusEntity, litterEntity, wasteEntity, hopperEntity] = (this._config.entities || []).map(entityId => entityId && entityId !== "" ? this._hass.states[entityId] : undefined);
    const petWeightEntities = (this._config.pet_weight_entities || []).map(entityId => entityId && entityId !== "" ? this._hass.states[entityId] : undefined).filter(entity => entity !== undefined);

    // Check if any required entities are configured
    const hasRequiredEntities = statusEntity || litterEntity || wasteEntity;

    if (!hasRequiredEntities) {
      this.innerHTML = `
        <ha-card>
          <style>
            ha-card {
              padding: 16px;
              background: var(--card-background-color, white);
              color: var(--primary-text-color, black);
              border-radius: 12px;
              font-family: 'Segoe UI', sans-serif;
              text-align: center;
            }
            .setup-message {
              padding: 20px;
              color: var(--secondary-text-color, #666);
            }
            .setup-title {
              font-size: 1.2rem;
              font-weight: bold;
              margin-bottom: 8px;
            }
          </style>
          <div class="setup-message">
            <div class="setup-title">Litter-Robot 4 Card</div>
            <div>Please configure the required entities in the card settings.</div>
          </div>
        </ha-card>
      `;
      return;
    }

    const litterLevel = Number(litterEntity?.state);
    const wasteLevel = Number(wasteEntity?.state);
    const litterDisplay = isNaN(litterLevel) ? "--" : `${Math.round(litterLevel)}%`;
    const wasteDisplay = isNaN(wasteLevel) ? "--" : `${Math.round(wasteLevel)}%`;
    const litterColor = isNaN(litterLevel) ? "red" : this.getLitterColor(litterLevel);
    const wasteColor = isNaN(wasteLevel) ? "red" : this.getWasteColor(wasteLevel);
    const statusText = this.getReadableStatus(statusEntity?.state || "");
    const statusColor = this.getStatusColor(statusEntity?.state || "");

    this.innerHTML = `
      <ha-card>
        <style>
          ha-card {
            padding: 16px;
            background: var(--card-background-color, white);
            color: var(--primary-text-color, black);
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
            border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
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
        </style>
        
        <div class="title">${this._("common.title")}</div>

        ${statusEntity ? `
          <div class="status clickable" onclick="this.getRootNode().host._showMoreInfo('${statusEntity.entity_id}')">
            <div class="status-icon ${statusColor}"></div>
            <div class="label">${statusText}</div>
          </div>
        ` : ""}

        ${litterEntity ? `
          <div class="item clickable" onclick="this.getRootNode().host._showMoreInfo('${litterEntity.entity_id}')">
            <div class="icon ${litterColor}"></div>
            <div class="label">${this._("common.litter")}: ${litterDisplay}</div>
          </div>
        ` : ""}

        ${wasteEntity ? `
          <div class="item clickable" onclick="this.getRootNode().host._showMoreInfo('${wasteEntity.entity_id}')">
            <div class="icon ${wasteColor}"></div>
            <div class="label">${this._("common.waste")}: ${wasteDisplay} ${this._("common.full")}</div>
          </div>
        ` : ""}

        ${hopperEntity ? `
          <div class="item clickable" onclick="this.getRootNode().host._showMoreInfo('${hopperEntity.entity_id}')">
            <div class="icon ${this._getHopperIcon(hopperEntity.entity_id)}"></div>
            <div class="label">${this._("common.hopper")}: ${this._getHopperState(hopperEntity.entity_id)}</div>
          </div>
        ` : ""}

        ${petWeightEntities.length > 0 ? `
          <div class="pet-weights">
            ${petWeightEntities.map(entity => `
              <div class="item clickable" onclick="this.getRootNode().host._showMoreInfo('${entity.entity_id}')">
                <div class="icon blue"></div>
                <div class="label">${entity.attributes?.friendly_name || this._("common.pet_weight")}: ${this.convertWeight(entity.state || "")}</div>
              </div>
            `).join('')}
          </div>
        ` : ""}
      </ha-card>
    `;
  }
}

class LitterRobot4Editor extends HTMLElement {
  constructor() {
    super();
    this._config = {};
    this._hass = {};
  }

  static get properties() {
    return {
      hass: {},
      _config: {},
    };
  }

  setConfig(config) {
    this._config = { ...config };
    if (!this._config.entities) {
      this._config.entities = ["", "", "", ""];
    }
    if (!this._config.pet_weight_entities) {
      this._config.pet_weight_entities = [];
    }
    if (!this._config.language) {
      this._config.language = "en";
    }
    if (!this._config.use_metric) {
      this._config.use_metric = false;
    }
    this._updateEditor();
  }

  set hass(hass) {
    this._hass = hass;
    this._updateEditor();
  }

  get hass() {
    return this._hass;
  }

  _updateEditor() {
    if (!this._hass || !this._config) return;

    // Clear existing content
    this.innerHTML = '';

    // Create container div
    const container = document.createElement('div');
    container.className = 'editor-container';
    container.style.padding = '16px';

    // Create ha-form element properly
    const haForm = document.createElement('ha-form');
    
    // Set properties directly on the element
    haForm.hass = this._hass;
    haForm.data = this._config;
    haForm.schema = this._getSchema();
    haForm.computeLabel = this._computeLabel.bind(this);

    // Add proper event handling
    haForm.addEventListener('value-changed', (ev) => {
      // Stop event propagation to prevent dropdown closing
      ev.stopPropagation();
      this._valueChanged(ev);
    });

    // Prevent clicks inside the form from bubbling up
    haForm.addEventListener('click', (ev) => {
      ev.stopPropagation();
    });

    // Prevent mousedown events from bubbling up (important for dropdowns)
    haForm.addEventListener('mousedown', (ev) => {
      ev.stopPropagation();
    });

    // Add the form to the container and container to the editor
    container.appendChild(haForm);
    this.appendChild(container);
  }

  _getSchema() {
    const entityOptions = this._hass ? Object.keys(this._hass.states).map(entityId => ({
      value: entityId,
      label: `${this._hass.states[entityId].attributes.friendly_name || entityId} (${entityId})`
    })) : [];

    return [
      {
        name: "entities",
        type: "grid",
        schema: [
          {
            name: "0",
            required: true,
            selector: {
              entity: {
                multiple: false,
                filter: [
                  { domain: "sensor" },
                  { domain: "binary_sensor" }
                ]
              }
            }
          },
          {
            name: "1", 
            required: true,
            selector: {
              entity: {
                multiple: false,
                filter: [
                  { domain: "sensor" },
                  { domain: "binary_sensor" }
                ]
              }
            }
          },
          {
            name: "2",
            required: true,
            selector: {
              entity: {
                multiple: false,
                filter: [
                  { domain: "sensor" },
                  { domain: "binary_sensor" }
                ]
              }
            }
          },
          {
            name: "3",
            selector: {
              entity: {
                multiple: false,
                filter: [
                  { domain: "sensor" },
                  { domain: "binary_sensor" }
                ]
              }
            }
          }
        ]
      },
      {
        name: "pet_weight_entities",
        selector: {
          entity: {
            multiple: true,
            filter: [
              { domain: "sensor" },
              { domain: "binary_sensor" }
            ]
          }
        }
      },
      {
        name: "language",
        selector: {
          select: {
            options: [
              { value: "en", label: "English" },
              { value: "es", label: "Español" },
              { value: "nl", label: "Nederlands" },
              { value: "fr", label: "Français" }
            ]
          }
        }
      },
      {
        name: "use_metric",
        selector: {
          boolean: {}
        }
      }
    ];
  }

  _computeLabel(schema) {
    const labels = {
      entities: "Required Entities",
      "0": "Status Code Entity (Required)",
      "1": "Litter Level Entity (Required)", 
      "2": "Waste Drawer Entity (Required)",
      "3": "Litter Hopper Entity (Optional)",
      pet_weight_entities: "Pet Weight Entities (Optional)",
      language: "Language",
      use_metric: "Use Metric Units (kg)"
    };
    return labels[schema.name] || schema.name;
  }

  _valueChanged(ev) {
    if (!this._config || !this._hass) {
      return;
    }

    // Stop propagation to prevent dropdown closing
    ev.stopPropagation();
    ev.preventDefault();

    const newConfig = { ...this._config, ...ev.detail.value };
    
    // Ensure entities array format
    if (newConfig.entities && typeof newConfig.entities === 'object' && !Array.isArray(newConfig.entities)) {
      newConfig.entities = [
        newConfig.entities["0"] || "",
        newConfig.entities["1"] || "",
        newConfig.entities["2"] || "",
        newConfig.entities["3"] || ""
      ];
    }

    this._config = newConfig;

    // Dispatch config-changed event
    const event = new CustomEvent("config-changed", {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

// Improved custom element registration with better error handling
const defineCustomElements = async () => {
  try {
    console.debug("Defining custom elements...");
    
    // Define the main card element
    if (!customElements.get("litter-robot4-card")) {
      customElements.define("litter-robot4-card", LitterRobot4Card);
      console.debug("litter-robot4-card element defined successfully");
    } else {
      console.debug("litter-robot4-card element already defined");
    }
    
    // Define the editor element
    if (!customElements.get("litter-robot4-editor")) {
      customElements.define("litter-robot4-editor", LitterRobot4Editor);
      console.debug("litter-robot4-editor element defined successfully");
    } else {
      console.debug("litter-robot4-editor element already defined");
    }
    
    console.debug("All custom elements defined successfully");
    
    // Register the card after elements are defined
    await registerCard();
    
  } catch (error) {
    console.error("Error defining custom elements:", error);
    throw error;
  }
};

// Initialize everything when the script loads
(async () => {
  try {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      await new Promise(resolve => {
        document.addEventListener('DOMContentLoaded', resolve);
      });
    }
    
    // Define custom elements and register card
    await defineCustomElements();
    
    console.debug("Litter-Robot 4 Card initialization complete");
  } catch (error) {
    console.error("Failed to initialize Litter-Robot 4 Card:", error);
  }
})();