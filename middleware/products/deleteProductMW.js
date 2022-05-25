/**
 * Termék törlése ID alapján
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return  (req, res, next) => {
        if(typeof res.locals.products === 'undefined'){
            return next();
        }

        return res.locals.products.remove(err => {
            if(err){
                return next(err);
            }
            return res.redirect('/adminpage');
        })
    };
};