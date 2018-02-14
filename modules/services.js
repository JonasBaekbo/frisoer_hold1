const services = require('../json_data/services');
// services.services.forEach(item => {
//     console.log(item);
// })
const fs = require("fs");

exports.getOne = (req, res) => {
    const id = req.params.id;
    var serviceArr;
    fs.readFile("./json_data/services.json", "utf8", (err, data) => {
        if (err => {
                res.send({
                    'error': err
                });
            })
            data = JSON.parse(data);
        console.log("data.services[id - 1] = " + data.services[id - 1]);
        res.send(data.services[id - 1]);
    })
}
exports.getAll = (req, res) => {
    res.render('admin/pages/services', services);
}
exports.updateOne = (req, res) => {
    const id = req.params.id;
    console.log('update is reached');
    fs.readFile("./json_data/services.json", "utf8", (err, data) => {
        data = JSON.parse(data);
        let name = req.body.name;
        let price = req.body.price;
        data.services[id - 1].name = name;
        data.services[id - 1].pris = price;
        let json = JSON.stringify(data, null, "\t")
        fs.writeFile("./json_data/services.json", json, (err) => {});
    })
    res.send(200, {
        "message": "success"
    })
}
exports.updateAll = (req, res) => {}
exports.addSingle = (req, res) => {
    fs.readFile("./json_data/services.json", "utf8", (err, data) => {
        console.log(data);
        console.log(req.body);
        data = JSON.parse(data);
        data.services.push({
            "id": data.services.length + 1,
            "name": req.body.name,
            "pris": req.body.price
        });
        let json = JSON.stringify(data, null, "\t")
        fs.writeFile("./json_data/services.json", json, (err) => {});
    })
    res.send(200, {
        "message": "success"
    })
}
exports.addMultiple = (req, res) => {}
exports.deleteSingle = (req, res) => {
    fs.readFile("./json_data/services.json", "utf8", (err, data) => {
        data = JSON.parse(data);
        // console.log(data.ties);
        data.ties.splice(req.body.id - 1, 1);
        console.log(req.body.id);
        let json = JSON.stringify(data, null, "\t")
        fs.writeFile("./json_data/services.json", json, (err) => {});
    })
}
exports.deleteMultiple = (req, res) => {}