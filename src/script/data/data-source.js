const axios = require('axios');
const dataSource = () => {
  const config = {
    method: 'get',
    url: 'https://api.themoviedb.org/3/discover/movie?api_key=5ca819f5c45287f67d1d2e79e8dc8ccc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate',
    headers: {}
  };

  axios(config)
    .then(function (response) {
      console.log(response.data.results);
      return response.data.results;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default dataSource;
