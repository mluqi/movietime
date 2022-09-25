class SearchBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
      this.innerHTML = `
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-bd-primary" type="submit">
        Search
      </button>
    </form>
      `;
    }
  }
   
  customElements.define('search-bar', SearchBar);
//   searchMoviesTrend(keyword) {
//     if (keyword == '') {
//     } else {
//       return axios.get(`${this.baseURL}search/movie${this.apiKey}&query=${keyword}&page=1`).then((response) => {
//         if (response.data.results.length) {
//           return Promise.resolve(response.data.results);
//         } else {
//           return Promise.reject(`${keyword}`);
//         }
//       });
//     }
//   }
