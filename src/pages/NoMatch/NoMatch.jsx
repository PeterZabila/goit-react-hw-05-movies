import { Link } from "react-router-dom";
import styles from './noMatch.module.css';

export default function NoMatch() {
    return (
        <>
         <div>No results found for your request</div>
         <ul className={styles.List}>
            <li className={styles.ListItem}>
                <Link to="/">Home</Link>
            </li>
            <li className={styles.ListItem}>
                <Link to="/movies">Movies</Link>
            </li>
         </ul>
        </>
    )
}