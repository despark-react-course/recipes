const recipeController = require('./recipe');
const commentController = require('./comment');
const userController = require('./user');
const ingredientController = require('./ingredient');

module.exports = {
    recipe: recipeController,
    comment: commentController,
    user: userController,
    ingredient: ingredientController
};
