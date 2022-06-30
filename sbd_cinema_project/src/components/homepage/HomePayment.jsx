import { NavLink } from 'react-router-dom';

const HomePayment = () => {
    return ( 
        <div className="homePayment">
            <NavLink to="/components/payment/PaymentDetails">
                <p>Make a Payment</p>
            </NavLink>
        </div>
     );
}
 
export default HomePayment;