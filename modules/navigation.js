const fs = require("fs");
const services = require('../modules/services');
const servicesjson = require('../json_data/services');
const åbningstiderjson = require('../json_data/åbningstider');
const products = require('../modules/products');

exports.content = (req, res) => {
    res.render('admin/pages/content');
};