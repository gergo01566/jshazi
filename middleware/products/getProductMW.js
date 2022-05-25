
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const ProductModel = objectrepository.ProductModel
    return (req, res, next) => {
        return ProductModel.findOne({_id: req.params.productID}, (err,product) => {
            if(err || !product){
                return next(err);
            }
            res.locals.products = product;
            return next();
        })
    };
};