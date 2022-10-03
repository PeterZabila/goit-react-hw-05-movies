export const App = () => {

  const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
  const BASE_URL = 'https://api.themoviedb.org/3';

  const genres = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];


export async function getMovies(url) {
  try {
    const response = await fetch(url);
    const toJson = await response.json();
    showMovies(toJson.results);
    return toJson.total_results;
  } catch (error) {
    console.log(error);
  }
}

export function showMovies(data) {
  const markup = data
    .map(el => {
      const { title, poster_path, release_date, genre_ids, id } = el;
      let movieGenre;

      movieGenre = genres
        .filter(el => el.id === genre_ids[0] || el.id === genre_ids[1] || el.id === genre_ids[2])
        .map(el => el.name)
        .join(', ');

      let dateToYear = new Date(release_date);
      const year = dateToYear.getFullYear();
      return cardTpl({ title, poster_path, release_date, genre_ids, id, movieGenre, year });
    })
    .join('');

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
