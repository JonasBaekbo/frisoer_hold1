exports.getAll = (req, res) => {
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
            res.json(200, {
                "message": "Data slettet"
            });
        }
    });
};