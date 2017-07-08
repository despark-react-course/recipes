const Ingredient = require('../models/Ingredient');

module.exports = {
    get: (req, res) => {
        Ingredient.find({
                recipe: req.params.recipeId
            })
            .sort({
                dateCreated: -1
            })
            .populate('author', '_id username')
            .then(ingredients => {
                res.status(200).send(ingredients);
            })
    },
    post: (req, res) => {
        Ingredient.create({
            recipe: req.params.recipeId,
            content: req.body.content,
            name: req.body.name,
            pictureUrl: req.body.pictureUrl
        }).then(ingredient => {
            res.status(200).send({
                ingredient
            });
        })
    }
};
