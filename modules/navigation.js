const services = require('../modules/services');

exports.index = (req, res) => {
    res.render('pages/index');
};

exports.brugere = (req, res) => {
    res.render('admin/pages/brugere');
};

// exports.produkter = (req, res) => {
//     res.render('admin/pages/produkter');
// };

exports.content = (req, res) => {
    res.render('admin/pages/content');
};

// exports.services = (req, res) => {
//     res.render('admin/pages/services', services.getAll);
// };