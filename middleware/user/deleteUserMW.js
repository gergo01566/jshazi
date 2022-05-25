/**
 * Törli a felhasználó hozzáférését a webshophoz
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return  (req, res, next) => {
        console.log(res.locals.users);
        if(typeof res.locals.users === 'undefined'){
            return next();
        }

        return res.locals.users.remove(err => {
            if(err){
                return next(err);
            }
            return res.redirect('/adminpage');
        })
    };
};