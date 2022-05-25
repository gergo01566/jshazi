const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return (req, res, next) => {
        if(typeof req.session.user_Id !== 'undefined'){
            return res.redirect('/drinks');
        }
        return next();
    };
};