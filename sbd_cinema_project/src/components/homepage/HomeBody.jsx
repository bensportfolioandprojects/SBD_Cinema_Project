import HomeAbout from "./HomeAbout";
import HomeBooking from "./HomeBooking";
import HomePayment from "./HomePayment";
import HomeUpcoming from "./HomeUpcoming";

const HomeBody = () => {
    return ( 
        <div className="bodyMenu">
            <HomeUpcoming/>
            <div className="bodyMenuCentre">
                <HomeBooking/>
                <HomePayment/>
            </div>
            <HomeAbout/>
        </div>
     );
}
 
export default HomeBody;