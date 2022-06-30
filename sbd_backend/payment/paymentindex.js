//tutorial followed from https://betterprogramming.pub/stripe-api-tutorial-with-react-and-node-js-1c8f2020a825
//as such, code is heavily used from that work
const express = require("express");
const router = express.Router();
// const app = express();
// require("dotenv").config();
const Stripe = require("stripe")
const stripe = Stripe(process.env.STRIPE_SECRET_TEST);
// const bodyParser = require("body-parser");
// const cors = require("cors");

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors());

router.post("/stripe/charge", async (req, res) => {
  console.log("stripe-routes.js 9 | route reached", req.body);
  let { amount, id } = req.body;
  console.log("stripe-routes.js 10 | amount and id", amount, id);
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "GBP",
      description: "QA Cinemas",
      payment_method: id,
      confirm: true,
    });
    console.log("stripe-routes.js 19 | payment", payment);
    res.json({
      message: "Payment Successful",
      success: true,
    });
  } catch (error) {
    console.log("stripe-routes.js 17 | error", error);
    res.json({
      message: "Payment Failed",
      success: false,
    });
  }
});

module.exports = router;
// app.listen(process.env.PORT || 8080, () => {
//   console.log("Server started...");
// });