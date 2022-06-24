const EachSearchResult = ({movy}) => {
    return ( 
        <>
            <img src={movy.posterimage} alt={movy.moviename}/>
            <p>{movy.moviename}</p>
        </>
     );
}
 
export default EachSearchResult;