
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return (req, res, next) => {
        console.log(req.session);
        res.locals.products = {
            enum: 'sweets', //listázásnál lesz majd jelentős
            name: 'Csokis keksz',
            id: req.params.productID,
            price: 300,
            quantity: 50,       //kosárban levő termék darabszáma
            addedToCart: false,   //ha kosárban van, akkor azokat jelenítjük meg a rendelésnél
        };
        return next();
    };
};