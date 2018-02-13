exports.login = (req, res) => {
        if(req.method == "POST")
        {
            var message = '';
            var sess = req.session;
    
            var post = req.body;
            var name = post.user_name;
            var pass = post.password;
    
            var sql = `
                SELECT
                    id,
                    first_name,
                    last_name,
                    user_name
                FROM brugere
                WHERE
                    user_name = ? AND password = ?
            `;
    
            db.query(sql, [name, pass], function (err, results) {
                if (results.length) {
                    req.session.userId = results[0].id;
                    req.session.user = results[0];
                    // console.log(results[0].id);
                    res.redirect('/profile');
                } else {
                    message = 'Wrong credentials.';
                    res.render('admin/pages/signin', {
                        message: message
                    });
                }
            });
        }
        else 
        {
            res.render('admin/pages/signin');
        }
}

exports.signup = (req, res) => {
    if(req.method == "POST")
        {
            var message = '';
		var post = req.body;
		var name = post.user_name;
		var pass = post.password;
		var fname = post.first_name;
		var lname = post.last_name;
		var mob = post.mob_no;

		// TODO: Tilføj validering af resten af de indtastede oplysninger!

		if (name != "" && pass != "") {

			var sql = `
				INSERT INTO brugere
				SET
					first_name = ?,
					last_name = ?,
					mob_no = ?,
					user_name = ?,
					password = ?
				`;

			db.query(sql, [fname, lname, mob, name, pass], function (err, result) {
				if (err) {
					console.log("signup error: " + err);
				} else {
					message = "Succesfully! Your account has been created.";
					res.render('admin/pages/signup', {
						message: message,
						messageType: "alert-success",
						showForm: false
					});
				}

			});
		} else {
			message = "Username and password are required!";
			res.render('admin/pages/signup', {
				message: message,
				messageType: "alert-danger"
			});
		}

        }
        else 
        {
            res.render('admin/pages/signup');
        }   
}

exports.delete = (req, res) => {
    
}

exports.update = (req, res) => {
    
}

exports.new = (req, res) => {
    
}

exports.logout = (req, res) => {
    req.session.destroy(function (err) {
        res.redirect("/login");
    });
}

exports.profile = (req, res) => {
    var userId = req.session.userId;
		if (userId == null) {
			res.redirect("/login");
			return;
		}

		var sql = "SELECT * FROM brugere WHERE id = ?";
		db.query(sql, [userId], function (err, result) {
			res.render('admin/pages/profile', {
				data: result
			});
		});
}