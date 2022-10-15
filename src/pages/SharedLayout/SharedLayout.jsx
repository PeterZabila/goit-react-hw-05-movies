import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import styles from './sharedLayout.module.scss';

const getClassName = ({isActive}) => {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

export const SharedLayout = () => {
  return (
    <>
        <nav className={styles.menu}>
          <NavLink to="/" className={getClassName} end>Home</NavLink>
          <NavLink to="/movies" className={getClassName} end>Movies</NavLink>
        </nav>
        <Suspense>
          <Outlet />
        </Suspense>
    </>
  );
};

