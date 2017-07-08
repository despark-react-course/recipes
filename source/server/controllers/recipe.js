const Recipe = require('../models/Recipe');

module.exports = {
    add: {
        post: (req, res) => {
            const inputData = req.body;
            console.log(inputData);

            Recipe.create({
                title: inputData.title,
                description: inputData.description,
                pictureUrl: inputData.pictureUrl
            }).then(recipe => {
                if (!recipe) {
                    return res.status(500).send({
                        message: 'Cannot write recipe in database'
                    })
                }

                res.status(200).send({
                    message: `${recipe.title} added!`
                });
            });
        }
    },
    all: {
        get: (req, res) => {
            Recipe.find()
                .sort({
                    dateCreated: -1
                })
                .then(recipes => {
                    if (!recipes) {
                        return res.status(400).send({
                            message: 'No recipes. Care to add some?'
                        })
                    }

                    res.status(200).send(recipes);
                });
        }
    },
    fiveRecent: {
        get: (req, res) => {
            Recipe.find()
                .sort({
                    dateCreated: -1
                })
                .limit(5)
                .then(recipes => {
                    if (!recipes) {
                        return res.status(400).send({
                            message: 'No recipes. Care to add some?'
                        })
                    }

                    res.status(200).send(recipes);
                });
        }
    },
    search: {
        get: (req, res) => {
            let query = req.query.query
            if (typeof query === 'undefined') {
                query = ''
            }

            Recipe.find({
                    $text: {
                        $search: query
                    }
                }, {
                    matchScore: {
                        $meta: 'textScore'
                    }
                })
                .sort({
                    matchScore: {
                        $meta: 'textScore'
                    },
                    score: -1
                })
                .then(recipes => {
                    if (recipes.length === 0) {
                        return res.status(404).send({
                            message: 'Sorry! Recipe not found...'
                        })
                    }

                    res.status(200).send(recipes)
                });
        }
    }
};
