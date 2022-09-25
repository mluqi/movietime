class JumbotronElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="jumbotron pt-5">
        <br />
        <br />
        <h1 class="display-4">Selamat Datang di Movie Time!</h1>
        <p class="lead">Website ini berisi tentang Trending Movies dan Trending Series</p>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
        fill="#af0171"
        fill-opacity="1"
        d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
    </svg>
      `;
  }
}

customElements.define("jumbotron-element", JumbotronElement);
