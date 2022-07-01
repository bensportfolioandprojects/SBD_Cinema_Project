import { NavLink } from 'react-router-dom';

const HomeAbout = () => {
    return ( 
        <div className="homeAbout">
            <NavLink to="./about">
                <p>About</p>
            </NavLink>
        </div>
     );
}
 
export default HomeAbout;