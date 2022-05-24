/**
 * Admin számára kilistázza az összes terméket kategóriától függetlenül
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        req.session.asd = 1;
        return req.session.save((err) =>{
            if(err){
                return next(err);
            }
            res.locals.products =
                [
                    {
                        enum: 'sweets', //listázásnál lesz majd jelentős
                        name: 'Csokis keksz',
                        id: 1,
                        price: 300,
                        quantity: 50,       //kosárban levő termék darabszáma
                        addedToCart: false,   //ha kosárban van, akkor azokat jelenítjük meg a rendelésnél
                    },
                    {
                        enum: 'sweets', //listázásnál lesz majd jelentős
                        name: 'Laktózmentes csokis keksz',
                        id: 2,
                        price: 350,
                        quantity: 20,       //kosárban levő termék darabszáma
                        addedToCart: false,   //ha kosárban van, akkor azokat jelenítjük meg a rendelésnél
                    },
                    {
                        enum: 'sweets', //listázásnál lesz majd jelentős
                        name: 'Cukormentes csokis keksz',
                        id: 3,
                        price: 360,
                        quantity: 70,       //kosárban levő termék darabszáma
                        addedToCart: false,   //ha kosárban van, akkor azokat jelenítjük meg a rendelésnél
                    },
                    {
                        enum: 'drinks', //listázásnál lesz majd jelentős
                        name: 'Sprite 0,5l',
                        id: 4,
                        price: 320,
                        quantity: 100,       //kosárban levő termék darabszáma
                        addedToCart: false,   //ha kosárban van, akkor azokat jelenítjük meg a rendelésnél
                    },
                    {
                        enum: 'alcohols', //listázásnál lesz majd jelentős
                        name: 'olcsó vodka',
                        id: 5,
                        price: 1200,
                        quantity: 15,       //kosárban levő termék darabszáma
                        addedToCart: false,   //ha kosárban van, akkor azokat jelenítjük meg a rendelésnél
                    }
                ]
            next();
        })
    };
};