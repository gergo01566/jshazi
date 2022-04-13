
const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Order = db.model('Order', {
    date: Schema.Types.Date,
    products: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});

module.exports = Order;


