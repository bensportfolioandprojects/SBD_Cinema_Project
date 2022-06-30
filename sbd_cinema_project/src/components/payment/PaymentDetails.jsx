import { useState, useEffect } from 'react';
import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from 'react-router-dom'

import CheckoutForm from './CheckoutForm';
import axios from 'axios';
const PaymentDetails = () => {
    const { state } = useLocation();
    let bookingid = "";
    const adultprice = 740;
    const childprice = 560;
    const concessionprice = 500;
    const [id, setId] = useState("");
    const [total, setTotal] = useState(0);
    const [paymentform, setPaymentform] = useState(<></>)
    const [adulttickets, setAdult] = useState(0);
    const [childtickets, setChild] = useState(0);
    const [concessions, setConcession] = useState(0);
    const publicKey = "pk_test_51LFi2VINJaatCO9azz42mZysMTqCUZv9uMQhi3hsgN4flsRWdOvTvsx3U70gzT9i78USaOQ0FSEOZ0CqAFK4RUFj00CACf0Uk7";
    const stripeTestPromise = loadStripe(publicKey);
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:3001/booking/getAllByBookingId/${id}`)
            .then(res => {
                setAdult(res.data[0].adulttickets);
                setChild(res.data[0].childtickets);
                setConcession(res.data[0].concessions);
                setTotal(parseInt(adulttickets * adultprice) + parseInt(childtickets * childprice) + parseInt(concessions * concessionprice));
                console.log("res", res, total);
            }).catch("ERROR GET");
    };

    useEffect(() => {
        if (state) {
            bookingid = state.bookingid;
            setId(bookingid);
        }
    }, []);

    useEffect(() => {
        setPaymentform(
            <Elements stripe={stripeTestPromise}>
                <CheckoutForm data={total} />
            </Elements>
        )
    }, [total]);

    useEffect(() => {
        setTotal(parseInt(adulttickets * adultprice) + parseInt(childtickets * childprice) + parseInt(concessions * concessionprice));

    }, [adulttickets, childtickets, concessions]);

    

    return (
        <div>
            <h1 className="paymenttitle">Payment Form</h1>
            <div className="paymentform">
                <form onSubmit={handleSubmit} className="entryform">
                    <label htmlFor="paymentid">Please enter your booking id here: </label>
                    <input type="text" id="paymentid" value={id} onChange={e => setId(e.target.value)} />
                    <label>Price Of Booking: £{total / 100}</label>
                    <button type="submit" className="submitbtn">Submit</button>
                </form>
                {paymentform}
            </div>
        </div>
    );
}


export default PaymentDetails;