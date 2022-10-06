import axios from 'axios';
// import { Notify } from 'notiflix';
const BASE_URL = `https://api.themoviedb.org/3/`;
const API_KEY = `1b50ba0e0b99203af5e26bdcee6d2298`;

// export default async function fetchResult(query, page) {
//     const response = await axios
//       .get(BASE_URL, {
//         params: {
//           key: API_KEY,
//           q: query,
//           image_type: 'photo',
//           orientation: 'horizontal',
//           safesearch: `true`,
//           per_page: 12,
//           page: page,
//         },
//       })
//       .catch(function (error) {
//         console.log(error);
//         return `No results with query "${query}"`;
//       });
//     const images = await response.data;
//     if (images.totalHits === 0) {
//       Notify.warning(`Sorry, no images found with query "${query}"`);
//     }
//     return images;
//   }

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