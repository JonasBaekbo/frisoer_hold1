const services = require('../modules/services');

exports.index = (req, res) => {
    res.render('pages/index');
};

exports.brugere = (req, res) => {
    res.render('admin/pages/brugere');
};

exports.content = (req, res) => {
    res.render('admin/pages/content');
};