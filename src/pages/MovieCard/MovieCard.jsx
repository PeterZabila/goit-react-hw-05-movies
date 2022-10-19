import { useEffect, useState } from "react";
import { useParams, useLocation, NavLink, Outlet } from "react-router-dom";
import { fetchMovie } from "shared/shared";
import { Suspense } from "react";
import PropTypes from 'prop-types'; 
import Loader from "components/Loader/Loader";
import styles from './movieCard.module.scss';

const getClassName = ({isActive}) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

export default function MovieCard() {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  
  useEffect(() => {
    fetchMovie(id).then(response => {
        // console.log(response)
      if (response !== null) {
        setLoading(true);
         setState(response);
         setLoading(false);
       return
      }
      })
         .catch(error => {
        setError(error);
    });
  }, [id]);

  const location = useLocation();
  const backLinkHref = location.state?.from;
  
  return (
    <div className="container">
        <button className={styles.Button}> <NavLink to={backLinkHref} >Go back</NavLink> </button>

        {loading && <Loader />}
        {error && <p>Something went wrong</p>}
        {state && (
            <>
                <h1 className="page-title">{state.title} ({new Date(state.release_date).getFullYear()})</h1>
                <p>User score: {Math.round(state.popularity)}</p>
                <img src={state.backdrop_path ? ('https://image.tmdb.org/t/p/original/' + state.backdrop_path) : `https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png`} alt="" height="300px" />
                <h3>Overview</h3>
                <p>{state.overview}</p>
                <h3>Genres</h3>
                <p>{state.genres.map(genre => {
                        return genre.name;
                    }).join(' ')}</p>
                    <br />
                    <h3>Additional information</h3>
                
                    <NavLink to={"cast"} className={getClassName} state={{ from: location.state.from }} end><h4>Cast</h4></NavLink>
                    <NavLink to={"reviews"} className={getClassName} state={{ from: location.state.from }} end><h4>Reviews</h4></NavLink>
                    <Suspense>
                        <Outlet/>
                    </Suspense>
                    
            </>
        )}
    </div>
  )
}

MovieCard.propTypes = {
  fetchMovie: PropTypes.func,
}