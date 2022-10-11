import { List } from '../../components/List/List';
import PropTypes from 'prop-types';

export default function HomePage({ results }) {
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