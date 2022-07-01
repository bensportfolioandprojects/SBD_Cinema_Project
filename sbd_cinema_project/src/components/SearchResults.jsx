import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import EachSearchResult from './EachSearchResult';

const SearchResults = ({data}) => {
    
    const [movies, setMovies] = useState([]);

    let getMovies = () => {
        axios.get(`http://localhost:3000/movie/getAllByKeyword/${data}`)
        .then(res=> {
            setMovies(res.data);
        }).catch((err) => {console.log("Movie results :", err)});
    }
    useEffect(() => {
        getMovies();
    }, []);

    if (!movies.length) return <span>No results found</span>
    
    return ( 
        <div className="movieResults">
            {
            movies.map((movy, i) => {
                return (
                    <>
                        <EachSearchResult movy={movy} key={i}/>
                        <hr/>
                    </>
                )
            })}
        </div>
     );
}
 
export default SearchResults;