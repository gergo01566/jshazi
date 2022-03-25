/**
 * Kilistázza az édességeket a felhasználónak
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};