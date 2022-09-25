class MovieR extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <section id="movies">
        <div class="container pt-5">
          <div class="row mb-3">
            <div class="col">
              <h2>Movies</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="card shadow">
                <img src="" class="card-img-top" alt="poster1" />
                <div class="card-body">
                  <h5 class="card-title fw-semibold">Big Mouth</h5>
                  <p class="card-text">
                    Drama Korea Big Mouth menceritakan seorang pengacara muda bernama Park Chang Ho yang diperankan oleh Lee Jong Suk. Park Chang Ho ini juga memiliki nama panggilan lain yakni “Si Mulut Besar” karena sifatnya yang suka
                    membual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#af0171"
        fill-opacity="1.5"
        d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,96C672,75,768,85,864,128C960,171,1056,245,1152,256C1248,267,1344,213,1392,186.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
        `;
    }
  }
  
  customElements.define("movie-r", MovieR);
  