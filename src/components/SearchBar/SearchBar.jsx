import { useState, useEffect } from "react";
import styles from './searchBar.module.css';
import pic from './search.png';
import { List } from "components/List/List";
import { fetchSearch } from '../../shared/shared';
import  { useSearchParams } from 'react-router-dom';

export default function SearchBar() {
    const [results, setResults] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const filter = searchParams.get('filter') ?? "";
    useEffect(() => {
        if(filter !== "") {
            fetchSearch(filter).then(response => {
                const results = response.map(movie => movie);
                // console.log(results);
                setResults(results)});
        } else {
            setResults([]);
        }
    }, [filter]);

    const handleChange = e => {
        setSearchParams(e.target.value !== '' ? { filter: e.target.value} : {})
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        fetchSearch(filter).then(response => {
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
                            value={filter}
                            onChange={handleChange}
                        />
            </form>
            {filter && <List results={results}/>}
        </>
    )
}
