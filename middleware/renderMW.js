/**
 * Elkészíti az oldalt a betöltött adatok és template alapján
 */

const requireOption = require('../middleware/requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        console.log(viewName);
        res.render(viewName, res.locals);
    };
};