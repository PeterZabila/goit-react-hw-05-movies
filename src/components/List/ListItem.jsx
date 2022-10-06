import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


export const ListItem = ({ result }) => {
    // export const ResultsItem = ({ result, search }) => {
  const location = useLocation();

  const { title, name, poster_path } = result;
  // const image =
  //   (poster_path && 'https://image.tmdb.org/t/p/w500' + poster_path) ||
  //   `https://critics.io/img/movies/poster-placeholder.png`;
//   const path = (search === true && `${result.id}`) || `movies/${result.id}`;
  return (
    <li>
      <Link to={`{result.id}`} state={{ from: location }}>
     
        {/* <img src={image} alt={title || name} /> */}
        <label>
          <h3>{title || name}</h3>
        </label>
        </Link>
    </li>
  );
};