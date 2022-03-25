/**
 * Elkészíti az oldalt a betöltött adatok és template alapján
 */

const requireOption = require('../middleware/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};