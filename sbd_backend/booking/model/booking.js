const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    username: {
        type: String,
        trim: true, 
        required: true
    },
    movie: {
        type: String,
        trim: true, 
        required: true
    },
    dateandtime:{
        type: Date,
        // required: true
    },
    adulttickets:{
        type: Number,
        required: true,
        min:0
    },
    childtickets:{
        type: Number,
        required: true,
        min:0
    },
    concessions:{
        type: Number,
        min:0
    }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;