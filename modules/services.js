const services = require('../json_data/services');
services.services.forEach(item => {
    console.log(item);
})
let fs = require("fs");

exports.getOne = (req, res) => {
}
exports.getAll = (req, res) => {
    res.render('admin/pages/services', services);
}
exports.updateOne = (req, res) => {
}
exports.updateAll = (req, res) => {
}
exports.addSingle = (req, res) => {
    fs.readFile("./json_data/services.json", "utf8", (err, data) => {
        console.log(data);
        console.log(req.body);
        data = JSON.parse(data);
        data.services.push({
            "id": data.services.length +1,
            "name": req.body.name, 
            "pris": req.body.price});
        let json = JSON.stringify(data, null, "\t")
        fs.writeFile("./json_data/services.json", json, (err) => {
        });
    })
    res.send(200, {
        "message" : "success"
    })
}
exports.addMultiple = (req, res) => {
}
exports.deleteSingle = (req, res) => {
}
exports.deleteMultiple = (req, res) => {
}