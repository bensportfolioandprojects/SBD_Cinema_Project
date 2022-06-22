const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumSchema = new Schema({
    message: {
        type: String,
        trim: true, 
        required: [true, "Message can't be blank"],
        maxlength: 200
    },
});

const Forum = mongoose.model('Forum', forumSchema);

module.exports = Forum;