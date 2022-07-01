import SpiderMan from '../../resources/Spider-ManSpiderVerse2.jpg';
import { NavLink } from 'react-router-dom';

const HomeUpcoming = () => {
    return ( 
        <div className="homeUpcoming">
            <NavLink to="../../newreleases">
                <img className="upcomingMovie" src={SpiderMan} alt="Spider-Man: Across the Spider Verse"/>
            </NavLink>
            <p>Upcoming Releases</p>
        </div>
     );
}
 
export default HomeUpcoming;