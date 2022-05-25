/**
 * Jelszó ellenőrzése
 * - ha helyes, akkor átirányít a /drinks-re vagy az /adminpage-re (a felhasználó függvényében)
 * - ha nem lett kitöltve a form, akkor next()-et hív
 * - ha hibás, akkor átad egy error-t
*/
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const UserModel = objectrepository.UserModel;
    return function (req, res, next) {
        if (typeof req.body.password === 'undefined') {
            return next();
        }

        return UserModel.findOne({
            username: req.body.username,

        }, (err, user) => {
            if (err) {
                return next(err);
            }
            if (user === null) {
                res.locals.error = 'Nincs jogosultságod az oldal megtekintéséhez!'
                return next();
            }
            if (req.body.password !== user.password) {
                res.locals.error = 'Hibás jelszó!'
                return next();
            }
            req.session.user_Id = user._id;
            return req.session.save(err => {
                if (err) {
                    return next(err);
                }
                return res.redirect('/drinks');
            });
        });
    };
};
