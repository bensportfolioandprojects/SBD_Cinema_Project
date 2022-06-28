const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    moviename: {
        type: String,
        trim: true, 
        required: true
    },
    posterimage:{
        type: String,
        trim: true
    },
    keywords:{
        type: [String],
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;