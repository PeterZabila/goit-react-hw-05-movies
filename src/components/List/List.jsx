import { ListItem } from './ListItem';
import styles from './List.module.css';
import { Link } from 'react-router-dom';

export const List = ({ results, search }) => {
  return (
    <ul className={styles.List}>
      {results.map(result => (
          <ListItem result={result} key={result.id} search={search} id={result.id}/>
      ))}
    </ul>
  );
};