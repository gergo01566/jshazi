
const Schema = require('mongoose').Schema;
const db = require('../config/db');

const User = db.model('User', {
    id: Number,
    username: String,
    password: String,
});

module.exports = User;

