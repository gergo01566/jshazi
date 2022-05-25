/**
 * Kilistázza a kosár tartalmát a felhasználónak
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const ProductModel = objectrepository.ProductModel
    return (req, res, next) => {
        return ProductModel.find({addedtocart: true}, (err,product) => {
            if(err || !product){
                return next(err);
            }
            res.locals.shoppingcart = product;
            return next();
        })
    };
};