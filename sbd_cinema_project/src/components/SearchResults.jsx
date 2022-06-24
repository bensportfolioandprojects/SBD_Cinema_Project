import { useState } from 'react';
import { useEffect } from 'react';

const SearchResults = ({data}) => {
    
    const [movies, setMovies] = useState([]);

    let getMovies = () => {
        axios.get(`http://localhost:3000/search/getAllByKeyword/${data}`)
        .then(res=> {
            setMovies(res.data);
        }).catch((err) => {console.log("Movie results :", err)});
    }
    useEffect(() => {
        getMovies();
    }, []);
    
    return ( 
        <div className="movieResults">
            {
            movies.map((movy, i) => {
                return (<>
                    <img src={movy.image} alt={movy.title}/>
                    <p>{movy.title}</p>
                </>)
            })}
        </div>
     );
}
 
export default SearchResults;