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
    seats:{
        type: Number,
        required: true,
        min:0
    },
    date:{
        type: String,
        trim: true,
        match: /^[2-9][0-9][0-9][0-9]-[0-1][0-9]-[0-3][0-9]$/
    },
    time:{
        type: String,
        trim: true,
        match: /^[0-2][0-9]:[0-6][0-9]$/
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