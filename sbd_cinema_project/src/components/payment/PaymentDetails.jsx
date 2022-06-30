import { useState, useEffect } from 'react';
import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';

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
    const publicKey = "pk_test_51LFi2VINJaatCO9azz42mZysMTqCUZv9uMQhi3hsgN4flsRWdOvTvsx3U70gzT9i78USaOQ0FSEOZ0CqAFK4RUFj00CACf0Uk7";
    const stripeTestPromise= loadStripe(publicKey);
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
        //         setTotal((adulttickets*adultprice)+(childtickets*childprice)+(concessions*concessionprice)*100);
        //     }).catch("ERROR GET");
        setTotal(1230);
        
        

    };
    useEffect(() => {
        setPaymentform( 
        <Elements stripe={stripeTestPromise}>
            <CheckoutForm data={total}/>
        </Elements>
        )}, [total]);

    return (
        <div>
            <h1 className="paymenttitle">Payment Form</h1>
            <div className="paymentform">
                <form onSubmit={handleSubmit} className="entryform">
                    <label htmlFor="paymentid">Please enter your booking id here: </label>
                    <input type="text" id="paymentid" value={id} onChange={e => setId(e.target.value)} />
                    <label>Price Of Booking: {total} </label>
                    <button type="submit" className="submitbtn">Submit</button>
                </form>
                {paymentform}
            </div>
        </div>
    );
}


export default PaymentDetails;