/**
 * Admin számára listázza a felhasználókat
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const UserModel = objectrepository.UserModel;
    return  (req, res, next) => {
        UserModel.find({}, (err,user) =>{
            if(err){
                return next(err);
            }
            res.locals.users = user;
            return next();
        })
    };
};