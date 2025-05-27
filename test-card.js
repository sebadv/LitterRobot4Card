import { LitElement, html, css } from 'lit';

class TestCard extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object }
    };
  }

  setConfig(config) {
    this.config = config;
  }

  render() {
    return html`
      <ha-card>
        <div class="card-content">
          <h2>Test Card Working!</h2>
          <p>If you can see this, custom cards are working.</p>
          <p>Entity: ${this.config?.entity || 'No entity configured'}</p>
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      .card-content {
        padding: 16px;
      }
    `;
  }
}

customElements.define('test-card', TestCard);
console.log('Test card loaded successfully!'); 