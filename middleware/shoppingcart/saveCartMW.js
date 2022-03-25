/**
 * Ha a felhasználó a rendelés leadás gombra kattint, akkor elmenti a rendelés adatait
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};