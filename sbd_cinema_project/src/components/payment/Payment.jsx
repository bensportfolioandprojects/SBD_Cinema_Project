//tutorial followed from https://www.section.io/engineering-education/stripe-integration-react/
//as such, code is heavily based on Lalithnarayan C's work
import axios from 'axios';
import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout'

const Payment = ({data}) => {
    console.log({data});
    console.log(`${data.total*100}`);
    const [token, setToken] = useState("");
    let computeQuantity = (cart) => {
        return cart.reduce((count, itemInCart) => count + itemInCart.quantity, 0);
    }
    let onToken = (res) => {
        axios.post('/save-stripe-token', JSON.stringify(token))
        .then(res => {
            console.log(res);
        }).catch("ERROR POST");
    }
    return (
    <>
    <StripeCheckout
        amount = {`${data.total*100}`}
        name ="PAYMENT"
        description = "Pay with Card"
        stripeKey="pk_test_51LFi2VINJaatCO9azz42mZysMTqCUZv9uMQhi3hsgN4flsRWdOvTvsx3U70gzT9i78USaOQ0FSEOZ0CqAFK4RUFj00CACf0Uk7"
        currency="GBP"
        email="esadek@outlook.com"
        token={token}/>
    </>
    );
}
 
export default Payment;