import SpiderMan from '../../resources/Spider-ManSpiderVerse2.jpg';

const HomeUpcoming = () => {
    return ( 
        <div className="homeUpcoming">
            <a href="#">
                <img className="upcomingMovie" src={SpiderMan} alt="Spider-Man: Across the Spider Verse"/>
            </a>
            <p>Upcoming Releases</p>
        </div>
     );
}
 
export default HomeUpcoming;