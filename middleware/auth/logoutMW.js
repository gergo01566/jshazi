/**
 * Kilépteti a felhasználót és törli a session-t
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        req.session.destroy(err => {
            if(typeof err !== 'undefined'){
                return next(err);
            }
        })
    };
};