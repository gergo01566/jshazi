/**
 * Új felhasználó hozzáadása
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const UserModel = objectrepository.UserModel;
    return (req, res, next) => {
        console.log(req.body);
        if((typeof req.body.username === 'undefined' ||
            (typeof req.body.password === 'undefined')))
            return next();

        const newUser = res.locals.users ? res.locals.users : new UserModel();
        newUser.username = req.body.username;
        newUser.password = req.body.password;

        return newUser.save(err=>{
            if(err){
                return next(err);
            }
            return next();
        })
    };
};