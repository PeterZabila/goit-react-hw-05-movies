import styles from './App.module.css';
import { lazy } from 'react';
// import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from 'pages/HomePage/HomePage';
import NoMatch from './pages/NoMatch/NoMatch';
// import SearchBar from 'components/SearchBar/SearchBar';
import { List } from 'components/List/List';
import MovieCard from 'pages/MovieCard/MovieCard';
import { SharedLayout } from 'pages/SharedLayout/SharedLayout';
// import Movies from 'pages/Movies/Movies';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';
const Movies = lazy(() => import('pages/Movies/Movies'))
const Cast = lazy(() => import('components/Cast/Cast'))
const Reviews = lazy(() => import('components/Reviews/Reviews'))
 
export const App = () => {

  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage/>} />
          <Route path="movies" element={<Movies/>} />
          <Route path="movies" element={<List/>} />
          <Route path="movies/:id" element={<MovieCard/>} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NoMatch/>} />
      </Routes>
    </div>
  );
}
