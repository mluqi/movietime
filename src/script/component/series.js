class SeriesR extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <section id="series">
        <div class="container pt-5">
          <div class="row mb-3">
            <div class="col">
              <h2>Series</h2>
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
        `;
    }
  }
  
  customElements.define("series-r", SeriesR);
  