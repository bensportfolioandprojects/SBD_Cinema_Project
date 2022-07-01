import { NavLink } from 'react-router-dom';

const HomeBooking = () => {
    return ( 
        <div className="homeBooking">
            <NavLink to="../ticketbooking">
                <p>Make a Booking</p>
            </NavLink>
        </div>
     );
}
 
export default HomeBooking;