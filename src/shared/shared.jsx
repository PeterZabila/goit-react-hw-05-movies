import axios from 'axios';
// import { Notify } from 'notiflix';
const BASE_URL = `https://api.themoviedb.org/3/`;
const API_KEY = `1b50ba0e0b99203af5e26bdcee6d2298`;

export async function fetchResult() {
  const response = await axios.get(BASE_URL + 'trending/movie/day', {
      params: {
        api_key: API_KEY,
      },
    })
    .catch(function (error) {
      console.log(error);
      return `No results`;
    });
  return response.data.results;
}

export async function fetchSearch(query) {
  const response = await axios.get(BASE_URL + 'search/movie', {
      params: {
        api_key: API_KEY,
        query,
      },
    })
    .catch(function (error) {
      console.log(error);
      return `No results`;
    });
  return response.data.results;
}

export async function fetchMovie(id) {
  const response = await axios.get(BASE_URL + 'movie/' + id, {
      params: {
        api_key: API_KEY,
      },
    })
    .catch(function (error) {
      console.log(error);
      return `No results`;
    });
  return response.data;
};

export async function getCast(id) {
  const response = await axios
    .get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
    .catch(function (error) {
      console.log(error);
      return `No results`;
    });
    console.log(response.data)
  return response.data.cast;
}

export async function getReviews(id) {
  const response = await axios
    .get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`)
    .catch(function (error) {
      console.log(error);
      return `No results`;
    });

  return response.data.results;
}