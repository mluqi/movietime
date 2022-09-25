class Footer extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
      this.innerHTML = `
      <style>
      footer{
        padding: 10px;
        color: white;
        background-color: #e80f88;
        text-align: center;
        font-weight: bold;
        margin-top: 5rem;
      }
      </style>
        <div>
            <p>Mohammad Luqi &#169; 2022, Movie Time!</p>
        </div>
      `;
    }
  }
   
  customElements.define('foot-er', Footer);