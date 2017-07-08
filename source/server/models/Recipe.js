const mongoose = require('mongoose');

let recipeSchema = mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    description: {
        type: mongoose.Schema.Types.String
    },
    pictureUrl: {
        type: mongoose.Schema.Types.String
    },
    dateCreated: {
        type: mongoose.Schema.Types.Date,
        default: Date.now
    }
});

recipeSchema.index({
    title: 'text',
    description: 'text',
    genres: 'text'
});

module.exports = mongoose.model('Recipe', recipeSchema);
