const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    recipe: {
        type: mongoose.Schema.Types.ObjectId
    },
    dateCreated: {
        type: mongoose.Schema.Types.Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Comment', commentSchema);
