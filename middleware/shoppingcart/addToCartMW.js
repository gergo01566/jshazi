/**
 * Hozzáad a kosárhoz egy terméket, ha nem lett megadva a termék mennyisége vagy az 0, akkor error-t dob
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};