
const Schema = require('mongoose').Schema;
const db = require('../config/db');

const User = db.model('User', {
    _id: Number,
    username: String,
    password: String,
});

module.exports = User;

