import {NavLink } from 'react-router-dom';
import styles from './navBar.module.scss';
import { nanoid } from 'nanoid';

export default function NavBar() {
    return (
        <nav className={styles.menu}>
            <div>
                <NavLink to="/" key={nanoid()} className={styles.link}>Home</NavLink>
                <NavLink to="/movies" key={nanoid()} className={styles.link}>Movies</NavLink>
            </div>
        </nav>
    )
}