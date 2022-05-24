/**
 * Új termék hozzáadása/felülírása
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return (req, res, next) => {
        console.log(req.body);
        if((typeof req.body.name === 'undefined' ||
            (typeof req.body.quantity === 'undefined') ||
            (typeof req.body.price === 'undefined')))
        return next();

        res.locals.products.name=req.body.name;
        return next();
    };
};