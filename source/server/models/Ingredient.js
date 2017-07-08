const mongoose = require('mongoose');

const ingredientSchema = mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    content: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    pictureUrl: {
        type: mongoose.Schema.Types.String
    },
    recipe: {
        type: mongoose.Schema.Types.ObjectId
    },
    dateCreated: {
        type: mongoose.Schema.Types.Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Review', ingredientSchema);
