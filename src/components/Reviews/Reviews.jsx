import React from 'react';
import { getReviews } from 'shared/shared';
import { useState, useEffect } from 'react';
import { useParams, useLocation, NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from './reviews.module.css'

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    getReviews(id).then(response => {
      // console.log(response);
      setReviews(response);
    })
  }, [id])
const isReviews = reviews.length > 0;

  return (
  
   isReviews ? (  <>
        <h3>Reviews</h3>
          <ul className={styles.List}>
            { reviews.map(review => {
              const { author, name, username, content} = review;
              return (
                <li key={author || name || username} className={styles.ListItem}>
                  <p className={styles.Title}>Author: <span className={styles.Value}>{name || author}</span></p>
                  <p className={styles.Content}>{content}</p>
                </li>
              )
            }
              )}
          </ul>
          <NavLink to={location.state.from}>Go back to top</NavLink>
          </> ) : (<p>No reviews yet</p>)
  )
}
