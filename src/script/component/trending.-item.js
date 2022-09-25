import '../data/data-source.js'

class TrendMovie extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="row">
          <div class="col-md-4">
            <div class="card shadow">
              <img src="https://image.tmdb.org/t/p/w500/${this._movie.backdrop_path}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title fw-semibold">${this._movie.original_title}</h5>
                <p class="card-text">
                ${this._movie.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      `;
  }
}

customElements.define("trend-movie", TrendMovie);
