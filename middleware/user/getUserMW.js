/**
 * Admin számára listázza a felhasználókat
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return (req, res, next) => {
        res.locals.users=
            [
                {
                    _id: 6,
                    username: 'gergo',
                    password: 'xyz123',
                },
                {
                    _id: 10,
                    username: 'korte',
                    password: 'lol123',
                }
            ]
        return next();
    };
};