/**
 * Új termék hozzáadása/felülírása
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const ProductModel = objectrepository.ProductModel;
    return (req, res, next) => {
        console.log(req.body);
        if((typeof req.body.name === 'undefined' ||
            (typeof req.body.quantity === 'undefined') ||
            (typeof req.body.price === 'undefined')))
        return next();

        const newProduct = res.locals.products ? res.locals.products : new ProductModel();
        newProduct.name = req.body.name;
        newProduct.quantity = req.body.quantity;
        newProduct.category = req.body.category;
        newProduct.price = req.body.price;

        return newProduct.save(err=>{
            if(err){
                return next(err);
            }
            return next();
        })

        //res.locals.products.name=req.body.name;
        //return next();
    };
};