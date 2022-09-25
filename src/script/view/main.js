import '../component/jumbotron.js';
import '../component/app-bar.js';
import '../component/search-bar.js';
import '../component/trending-list.js';
import '../component/movies.js';
import '../component/series.js';
import '../component/footer.js';
import dataSource from '../data/data-source.js';

const main = () =>{
    const trendMovies = document.querySelector('trend-movie');
    const moviesRecommend = document.querySelector('movie-r');
    const seriesRecommend = document.querySelector('series-r');
    const data = new dataSource();

    const getMovie = async () => {
        try {
          const result = await data.getMovie();
          renderGetMovie(result);
        } catch (e) {
          console.log(e);
        }
      };
    
      const renderGetMovie = (result) => {
        trendMovies.movie = result;
      };
};

export default main;