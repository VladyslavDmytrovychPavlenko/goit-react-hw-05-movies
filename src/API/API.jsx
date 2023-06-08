import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '2e18e098b93c767d0beb7d2706d9567a';

async function fetchMoviesTrends() {
  const trending = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return trending.data;
}

async function fetchMoviesBySearch(searchQuery) {
  const movie = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`
  );
  return movie.data;
}

async function fetchMoviesDetails(movieId) {
  const movie = await axios.get(
    `movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  return movie.data;
}

async function fetchMoviesCast(movieId) {
  const credits = await axios.get(
    `movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  return credits.data;
}

async function fetchMoviesReviews(movieId) {
  const reviews = await axios.get(
    `movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return reviews.data;
}

export {
  fetchMoviesTrends,
  fetchMoviesBySearch,
  fetchMoviesDetails,
  fetchMoviesCast,
  fetchMoviesReviews,
};

fetchMoviesReviews.propTypes = { movieId: PropTypes.number.isRequired };
fetchMoviesCast.propTypes = { movieId: PropTypes.number.isRequired };
fetchMoviesDetails.propTypes = { movieId: PropTypes.number.isRequired };
fetchMoviesBySearch.propTypes = { searchQuery: PropTypes.string.isRequired };
