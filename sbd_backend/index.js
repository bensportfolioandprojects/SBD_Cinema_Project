const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const movierouter = require('./movie/route/movierouter');
const bookingrouter = require('./booking/route/bookingrouter');
const forumrouter = require('./forum/route/forumrouter');
const paymentrouter = require('./payment/paymentrouter');
const contactrouter = require('./contactus/contactrouter');
const PORT = process.env.PORT || 3001;
const DATABASE = 'test';
const DB_URI = `mongodb://localhost:27017/${DATABASE}`;


const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json()); 
app.use('/movie', movierouter);
app.use('/booking', bookingrouter);
app.use('/forum', forumrouter);
app.use('/payment', paymentrouter);
app.use('/contact', contactrouter);



app.use(function (error, request, response, next) {
    if (error.name === 'ValidationError') error.statusCode = 400;

    response.status(error.statusCode || 500)
            .send(error.message || "Something went wrong...");
});

function main() {
    mongoose.connect(DB_URI, {}, function (err) {
        if (err) {
            throw err;
        } else {
            console.log('Connected to database');
            app.listen(PORT, () => console.log('Up and running'));
        }
    });
}

main();