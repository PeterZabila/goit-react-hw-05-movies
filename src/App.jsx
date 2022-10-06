import styles from './App.module.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import {fetchResult} from 'shared/shared';
import HomePage from 'pages/HomePage/HomePage';
import NoMatch from './pages/NoMatch/NoMatch';
import NavBar from 'components/NavBar/NavBar';
import SearchBar from 'components/SearchBar/SearchBar';
import { List } from 'components/List/List';
 
export const App = () => {
const [results, setResults] = useState([]);

  useEffect(() => {
    fetchResult().then(response => {
      const results = response.map(movie => movie);
      setResults(results);
    }); 
  }, []);

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <NavBar />
      </div>
      <div className={styles.container}>
      <Routes>
        <Route path="/" element={<HomePage results={results}/>} />
        <Route path="/movies" element={<SearchBar/>} />
        <Route path="/movies" element={<List results={results}/>} />
        <Route path="*" element={<NoMatch/>} />
      </Routes>
      </div>
    </div>
  );
}
