/**
 * Jelszó ellenőrzése
 * - ha helyes, akkor átirányít a /drinks-re vagy az /adminpage-re (a felhasználó függvényében)
 * - ha nem lett kitöltve a form, akkor next()-et hív
 * - ha hibás, akkor átad egy error-t
*/
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if ((typeof req.body.password === 'undefined') || (typeof req.body.username === 'undefined')) {
            return next();
        }

        else if (req.body.password === 'xyz123') {
            req.session.user_id = '123';
            return req.session.save(err => {
                if(err) {
                    return next(err);
                }
                return res.redirect('/drinks');
            })
        } else {
            res.locals.error = 'Hibás jelszó!'
        }
    };
};