import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
export const getTrending = async (search) => {
  return await axios
    .get(`/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`)
    .then((response) => response.data.results);
};

export const searchMovies = async (search) => {
  return await axios
    .get(
      `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`
    )
    .then((response) => response.data.results);
};

export const getMovieDetails = async (movieId) => {
  return await axios
    .get(
      `/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
    .then((response) => response.data);
};

export const getMovieCredits = async (movieId) => {
  return await axios
    .get(`/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
    .then((response) => response.data.cast);
};

export const getMovieReviews = async (movieId) => {
  return await axios
    .get(`/movie/${movieId}/reviews?api_key=${process.env.REACT_APP_API_KEY}`)
    .then((response) => response.data.results);
};
