/**
 * Ha a felhasználó be van lépve, akkor next()-et hív, ha nincs akkor átirányítja a /login-ra
 * Ha az admin be van lépve, akkor next()-et hív, ha nincs akkor átirányítja a /login-rea
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};