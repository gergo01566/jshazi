/**
 * Törli a felhasználó hozzáférését a webshophoz
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};