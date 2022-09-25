import '../data/data-source.js';
import './trending.-itemjs';

class TrendingList extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    const TrendingEl = document.createElement('trending');
    TrendingEl.setAttribute('class', 'row');
    TrendingEl.innerHTML = `
    <section id="trend">
    <div class="container pt-5">
      <div class="row mb-3">
        <div class="col">
          <h2>Trending</h2>
        </div>
      </div>
    </div>
        `;
    this._movies.forEach((movie) => {
      TrendingEl.movie = movie;
      this.appendChild(TrendingEl);
    });
  }
}

customElements.define('trending-list', TrendingList);