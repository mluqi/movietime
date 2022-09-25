class AppBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
      this.innerHTML = `
      <nav class="navbar navbar-dark navbar-expand-lg shadow fixed-top" style="background-color: #e80f88">
      <div class="container">
        <a class="navbar-brand" href="#">Movie Time!</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#trend">Trending</a>
            <a class="nav-link" href="#movies">Movies</a>
            <a class="nav-link" href="#series">Series</a>
          </div>
        </div>
      </div>
    </nav>
      `;
    }
  }
   
  customElements.define('app-bar', AppBar);