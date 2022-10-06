import { useState, useEffect } from "react";
import styles from './searchBar.module.css';
import pic from './search.png';
import { List } from "components/List/List";
import {fetchSearch} from '../../shared/shared';


export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        setResults([]);
    }, []);

    const handleChange = e => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchSearch(query).then(response => {
            console.log(response);
            const results = response.map(movie => movie);
            setResults(results)});
    };
    
    return (
        <>
            <form className={styles.SearchForm} onSubmit={handleSubmit} >
                        <button type="submit" className={styles.SearchFormButton}>
                            <img alt="" src={pic} width="20px" />
                        </button>

                        <input
                            className={styles.SearchFormInput}
                            name="query"
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search movies"
                            value={query}
                            onChange={handleChange}
                        />
            </form>
            {query && <List results={results}/>}
        </>
    )
}