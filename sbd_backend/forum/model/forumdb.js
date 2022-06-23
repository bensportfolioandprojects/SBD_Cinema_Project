const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumSchema = new Schema({
    message: {
        type: String,
        trim: true, 
        maxlength: 200
    },
});

const Forum = mongoose.model('Forum', forumSchema);

module.exports = Forum;