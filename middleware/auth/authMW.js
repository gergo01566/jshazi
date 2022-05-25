/**
 * Ha a felhasználó be van lépve, akkor next()-et hív, ha nincs akkor átirányítja a /login-ra
 * Ha az admin be van lépve, akkor next()-et hív, ha nincs akkor átirányítja a /login-rea
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return (req, res, next) => {
     //  if(typeof req.session.user_Id === 'undefined'){
      //      return res.redirect('/login');
     //   }
        return next();
    };
};