import { useState, useEffect } from 'react';
import axios from 'axios';
import Payment from './Payment';

const PaymentDetails = ({ data }) => {
    const adultprice = 7.4;
    const childprice = 5.6;
    const concessionprice = 5.0;
    const [id, setId] = useState("");
    const [paymentform, setPaymentform] = useState(<></>)
    const [adulttickets, setAdult] = useState(0);
    const [childtickets, setChild] = useState(0);
    const [concessions, setConcession] = useState(0);
    const [total, setTotal] = useState(0);
    if ({ data }.id) {
        setId(id);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // axios.get(`http://localhost:3001/booking/getAllById/${id}`)
        //     .then(res => {
        //         console.log(res);
        //         setAdult(res.adulttickets);
        //         setChild(res.childtickets);
        //         setConcession(res.concessions);
        //         setTotal((adulttickets*adultprice)+(childtickets*childprice)+(concessions*concessionprice));
        //         return (
        //             <Payment data={[{total: (adulttickets*adultprice)+(childtickets*childprice)+(concessions*concessionprice)}]}/>
        //         )
        //     }).catch("ERROR GET");
        setTotal(12.3);
        
        

    };
    useEffect(() => {
        setPaymentform( <Payment data={{total, adulttickets}} />)
    }, [total]);

    return (
        <div>
            <h1 className="paymenttitle">Payment Form</h1>
            <div className="paymentform">
                <form onSubmit={handleSubmit} className="entryform">
                    <label htmlFor="paymentid">Please enter your booking id here: </label>
                    <input type="text" id="paymentid" value={id} onChange={e => setId(e.target.value)} />
                    <label>Price Of Booking: {total}</label>
                    <button type="submit" className="submitbtn">Submit</button>
                </form>
                {paymentform}
            </div>
        </div>
    );
}


export default PaymentDetails;