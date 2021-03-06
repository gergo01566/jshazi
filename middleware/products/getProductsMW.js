/**
 * Admin számára kilistázza az összes terméket kategóriától függetlenül
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const ProductModel = objectrepository.ProductModel;
    return  (req, res, next) => {
        ProductModel.find({}, (err,product) =>{
            if(err){
                return next(err);
            }
            res.locals.products = product;
            return next();
        })
    };
};