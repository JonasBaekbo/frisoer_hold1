const services = require('../json_data/services');
// services.services.forEach(item => {
//     console.log(item);
// })
var os = require("os");
var fs = require('fs');
const writeStream = fs.createWriteStream('./logs.txt', {
    flags: 'a'
});

exports.getOne = (req, res) => {
    var userId = req.session.userId;
    if (userId == null) {
        res.redirect("/login");
        return;
    }

    const id = req.params.id;
    var serviceArr;
    fs.readFile("./json_data/services.json", "utf8", (err, data) => {
        if (err => {
                res.send({
                    'error': err
                });
            })
            data = JSON.parse(data);
        //console.log("data.services[id - 1] = " + data.services[id - 1]);
        res.send(data.services[id - 1]);
    })
}
exports.getAll = (req, res) => {
    var userId = req.session.userId;
    if (userId == null) {
        res.redirect("/login");
        return;
    }

    res.render('admin/pages/services', services);
}
exports.updateOne = (req, res) => {
    var userId = req.session.userId;
    if (userId == null) {
        res.redirect("/login");
        return;
    }

    const id = req.params.id;
    //console.log('update is reached');
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
    writeStream.write(date + ` <------ Service opdateret ------->` + os.EOL, 'utf8');
}

exports.addSingle = (req, res) => {
    var userId = req.session.userId;
    if (userId == null) {
        res.redirect("/login");
        return;
    }

    fs.readFile("./json_data/services.json", "utf8", (err, data) => {
        //console.log(data);
        //console.log(req.body);
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
    });
    writeStream.write(date + ` <------ Service oprettet ------->` + os.EOL, 'utf8');
}

exports.deleteSingle = (req, res) => {
    var userId = req.session.userId;
    if (userId == null) {
        res.redirect("/login");
        return;
    }

    const id = req.params.id;
    //console.log(id);
    fs.readFile("./json_data/services.json", "utf8", (err, data) => {
        data = JSON.parse(data);
        // console.log(data.ties);
        data.services.splice((id - 1), 1);
        let json = JSON.stringify(data, null, "\t")
        fs.writeFile("./json_data/services.json", json, (err) => {});
    });
    writeStream.write(date + ` <------ Service slettet ------->` + os.EOL, 'utf8');
}