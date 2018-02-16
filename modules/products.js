const servicesjson = require('../json_data/services');
const åbningstiderjson = require('../json_data/åbningstider');
const menuItemsjson = require('../json_data/menu_items');
const footerjson = require('../json_data/footer');
const stylesjson = require('../json_data/styles');

var os = require("os");
var fs = require('fs');
const writeStream = fs.createWriteStream('./logs.txt', {
    flags: 'a'
});

var date = new Date().toDateString();

exports.getAllIndex = (req, res) => {
    // var userId = req.session.userId;
    // if (userId == null) {
    //     res.redirect("/login");
    //     return;
    // }
    var sql = `
			SELECT
				*
			FROM produkter
		`;

    db.query(sql, function (err, results) {
        if (results.length) {
            //console.log(menuItemsjson);
            res.render('../views/pages/index', {
                "servicesjson": servicesjson,
                "åbningstiderjson": åbningstiderjson,
                "menuItemsjson": menuItemsjson,
                "footerjson": footerjson,
                "results": results,
                "styles" : stylesjson
            })
        }
    });
};

exports.getAll = (req, res) => {
    var userId = req.session.userId;
    if (userId == null) {
        res.redirect("/login");
        return;
    }
    var sql = `
			SELECT
				*
			FROM produkter
		`;

    db.query(sql, function (err, results) {
        if (results.length) {
            //console.log(results);
            res.render('admin/pages/produkter', {
                results: results
            });
        }
    });
};

exports.addSingle = (req, res) => {

    var message = '';
    var post = req.body;
    var navn = post.navn;
    var pris = post.pris;
    var varenummer = post.varenummer;
    var beskrivelse = post.beskrivelse;
    var billede = post.billede;

    // TODO: Tilføj validering af resten af de indtastede oplysninger!

    if (navn != "" && pris != "" && varenummer != "" && beskrivelse != "" && billede != "") {

        var sql = `
				INSERT INTO produkter
				SET
					navn = ?,
					pris = ?,
					varenummer = ?,
					beskrivelse = ?,
					billede = ?
				`;

        db.query(sql, [navn, pris, varenummer, beskrivelse, billede], function (err, result) {
            if (err) {
                console.log("Stor fed fejl: " + err);
            } else {
                writeStream.write(date + ` <------ Produkt oprettet ------->` + os.EOL, 'utf8');
                res.redirect('/produkter');
            }

        });
    } else {
        // message = "udfyld lortet!";
        // res.render('admin/pages/produkter', {
        //     message: message,
        //     messageType: "alert-danger"
        // });
        var sql = `
			SELECT
				*
			FROM produkter
		`;
        message = "udfyld lortet!";
        db.query(sql, function (err, results) {
            if (results.length) {
                //console.log(results);
                res.render('admin/pages/produkter', {
                    results: results,
                    message: message,
                    messageType: "alert-danger"
                });
            }
        });
    }
};

exports.delSingle = (req, res) => {

    db.query('DELETE FROM produkter where id = ?', [req.params.id], (err, rows) => {
        if (err) {
            console.log(err);
            res.json(500, {
                "message": "Internal Server Error",
                "error": err
            });
        } else {
            writeStream.write(date + ` <------ Produkt slettet ------->` + os.EOL, 'utf8');
            res.json(200, {
                "message": "Data slettet"
            });
        }
    });
};