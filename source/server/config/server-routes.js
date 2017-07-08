const controllers = require('../controllers');

module.exports = (app) => {
    // User routes
    app.post('/user/register', controllers.user.register.post);
    app.post('/user/login', controllers.user.login.post);
    app.post('/user/logout', controllers.user.logout);
    app.get('/api/user/:userId', controllers.user.profile.get);

    // Movie routes
    app.post('/api/recipes', controllers.recipe.add.post);
    app.get('/api/recipes/five-recent', controllers.recipe.fiveRecent.get);
    app.get('/api/recipes/:recipeId/comments', controllers.comment.get);
    app.post('/api/recipes/:recipeId/comments', controllers.comment.post);
    app.get('/api/recipes', controllers.recipe.search.get);
    app.get('/api/recipes/all', controllers.recipe.all.get);
};
