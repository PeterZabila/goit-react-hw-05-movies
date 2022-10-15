import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getCast } from 'shared/shared';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from './cast.module.css'

export default function Cast() {
  const [ cast, setCast ] = useState([]);
  const { id } = useParams();
  console.log(id);
 const location = useLocation();

  useEffect(() => {
    getCast(parseInt(id)).then(response => {
      console.log(response)
      setCast(response)});
  }, [id]);

  return (
    <>
       <h3>Cast</h3>
       <ul className={styles.List}>
        {cast.map(actor => {
          const { character, name, profile_path } = actor;
          const image = (profile_path &&
            'https://image.tmdb.org/t/p/w500' + profile_path) ||
          `https://www.addsystems.com/wp-content/uploads/2017/01/Anonym-e1491994623630.jpg`;
          return (
            <li key={name}>
              <img src={image} alt={name} width="250px" className={styles.Image}/>
              <p className={styles.Title}>Character: <span className={styles.Value}>{character}</span></p>
              <p className={styles.Title}>Actor: <span className={styles.Value}>{name}</span></p>

            </li>
          )
        })}
       </ul>
       <NavLink to={location.state.from}>Go back to top</NavLink>
    </>
  )
}
