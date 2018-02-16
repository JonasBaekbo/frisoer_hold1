const fs = require("fs");
const services = require('../modules/services');
const servicesjson = require('../json_data/services');
const åbningstiderjson = require('../json_data/åbningstider');
const products = require('../modules/products');
const menu_items = require('../json_data/menu_items');
const footer_items = require('../json_data/footer');

exports.content = (req, res) => {
    res.render('admin/pages/content', {
        "opening_hours" : åbningstiderjson,
        "menu_items" : menu_items, 
        "footer_items" : footer_items
    });
};