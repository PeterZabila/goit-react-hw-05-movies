import { List } from '../../components/List/List';
import PropTypes from 'prop-types';
import { fetchResult } from 'shared/shared';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchResult().then(response => {
      const results = response.map(movie => movie);
      setResults(results);
    }); 
  }, []);
  return (
    <>
      <h3>TRENDING TODAY</h3>
      <List results={results} />
    </>
  );
};

HomePage.propTypes = {
  results: PropTypes.array,
}