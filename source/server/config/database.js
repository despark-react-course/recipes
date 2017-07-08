const mongoose = require('mongoose');

const User = require('../models/User');
const encryption = require('../utilities/encryption');

function seedAdmin() {
    User.find({
        username: 'admin'
    }).then(users => {
        if (users.length === 0) {
            const pwd = 'admin';
            const salt = encryption.generateSalt();
            const hashedPwd = encryption.generateHashedPassword(salt, pwd);

            User.create({
                username: 'admin',
                firstName: 'Alex',
                lastName: 'Stoimenov',
                salt: salt,
                password: hashedPwd,
                age: 25,
                gender: 'Male',
                roles: ['Admin', 'Critic']
            }).then(admin => {
                console.log(`Seeded admin: ${admin.username}`);
            });
        }
    });
}

module.exports = (envConfig) => {
    mongoose.Promise = global.Promise;
    mongoose.connect(envConfig.database);

    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB.');
    });

    mongoose.connection.on('error', () => {
        console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
    });

    seedAdmin();
};
