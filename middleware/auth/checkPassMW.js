/**
 * Jelszó ellenőrzése
 * - ha helyes, akkor átirányít a /drinks-re vagy az /adminpage-re (a felhasználó függvényében)
 * - ha nem lett kitöltve a form, akkor next()-et hív
 * - ha hibás, akkor átad egy error-t
*/

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};