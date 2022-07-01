import { useState } from "react";
import { useElements, CardElement, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
//tutorial followed from https://betterprogramming.pub/stripe-api-tutorial-with-react-and-node-js-1c8f2020a825
//as such, code is heavily used from that work.


const CheckoutForm = ({data}) => {
    console.log(data);
    const stripe = useStripe();
    const elements = useElements();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url ="http://localhost:3001/payment/stripe/charge";
        
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });
        if (!error){
            console.log("Stripe 23 | token generated!", paymentMethod)
            try {
                const { id } = paymentMethod;
                const response = await axios.post(
                  "http://localhost:3001/payment/stripe/charge",
                  {
                    amount: parseInt(data),
                    id: id,
                  }
                );
        
                console.log("Stripe 35 | data", response.data.success);
                if (response.data.success) {
                  console.log("CheckoutForm.js 25 | payment successful!");
                }
              } catch (error) {
                console.log("CheckoutForm.js 28 | ", error);
              }
        } else {
            console.log(error.message);
            
        }
    }
    
    return (
    <form onSubmit={handleSubmit} id="cardform">
        <CardElement className="cardElement"/>
        <button id="paymentsubmit">Pay Now</button>
    </form>
    );
};
 
export default CheckoutForm;