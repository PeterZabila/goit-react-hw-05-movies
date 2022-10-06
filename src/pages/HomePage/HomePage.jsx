import { List } from '../../components/List/List';

export default function HomePage({ results }) {
  return (
    <>
      <h3>TRENDING TODAY</h3>
      <List results={results} />
    </>
  );
};
