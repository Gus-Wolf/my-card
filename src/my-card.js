import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    .card {
    max-width: 200px;
    margin: 16px;
    padding: 16px;
    border: 2px solid #ccc;
    background-color: #FF0000;
    border-radius: 8px;
    cursor: pointer;
  
}

.card-img {
    width: 150px; 
    margin-right: 12px;
    border-radius: 8px;
}

.card-content {
    flex-grow: 1;
}
.card-title {
    font-size: 1.5rem;
    margin-bottom: 8px;
    text-align: center;
}
.card-description.hidden {
    text-align: center;
}
.details-button {
    display: Details;
}
.hotpink-bg{
  background:hotpink;
}
.wrapper{}
.highlighted{
  background-color: hotpink;
}
@media screen and (max-width: 790px) {
    .details-button {
        display: none;
    }
}
    .card-img {
        width: 75%;
        height: auto;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.header}</h1>

        <p>Edit <code>src/MyCard.js</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

customElements.define('my-card', MyCard);