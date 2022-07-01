const EachSearchResult = ({movy}) => {

    return ( 
        <div className="movyResults">
            <div className="movyImage">
                <img src={movy.posterimage} alt={movy.moviename}/>
            </div>
            <div className="movyName">
                <p>{movy.moviename}</p>
            </div>
        </div>
     );
}
 
export default EachSearchResult;