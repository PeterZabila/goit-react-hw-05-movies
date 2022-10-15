// import { ListItem } from './ListItem';
import { NavLink } from 'react-router-dom';
import styles from './List.module.css';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export const List = ({ results }) => {

  const location = useLocation();
  return (
    <ul className={styles.List}>
      {results.map(result => (
        <li key={result.id} >
          <NavLink to={`/movies/${result.id}`} state={{ from: location }} result={result} id={result.id} className={styles.ListItem} >{result.title || result.name} 
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.string,
  })),
 
}