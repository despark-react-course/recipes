const Comment = require('../models/Comment');

module.exports = {
    get: (req, res) => {
        Comment.find({
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
        Comment.create({
            recipe: req.params.recipeId,
            content: req.body.content
        }).then(ingredient => {
            res.status(200).send({
                ingredient
            });
        })
    }
};
