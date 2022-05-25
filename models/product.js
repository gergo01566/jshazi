
const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Product = db.model('Product', {
    category: String, //listázásnál lesz majd jelentős
    name: String,
    price: Number,
    quantity: Number,       //kosárban levő termék darabszáma
    addedToCart: Boolean,   //ha kosárban van, akkor azokat jelenítjük meg a rendelésnél
});

module.exports = Product;


