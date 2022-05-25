
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const UserModel = objectrepository.UserModel
    return (req, res, next) => {
        return UserModel.findOne({_id: req.params.userID}, (err,user) => {
            if(err || !user){
                return next(err);
            }

            res.locals.users = user;
            return next();
        })
    };
};