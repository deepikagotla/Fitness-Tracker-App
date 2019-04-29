	/**
	 * Module dependencies.
	 */

	var jwt = require('jsonwebtoken');
	var atob = require('atob');
	var Cryptr = require('cryptr'),
    cryptr = new Cryptr(config.CRYPTOKEY);
    
	exports.signup = function (req, res) {
	  var fname = req.body.first_name;
		var lname = req.body.last_name;
		var gender = req.body.gender;
	  var pass = req.body.password;
	  var email = req.body.email;
	  var dec_pass = atob(pass);
	  var encrypted_pass = cryptr.encrypt(dec_pass);
	  var sql = "INSERT INTO `users`(`first_name`,`last_name`,`gender`,`email`,`password`) VALUES ('" + fname + "','" + lname + "','" + gender + "','" + email + "','" + encrypted_pass + "')";

	  connection.query(sql, function (err, result) {
	    if (err) {
	      console.log('Error', err)
	      res.end(JSON.stringify(result));
	    } else {
	      res.end(JSON.stringify(result));
	    }
	  });
	};
	//---------------------------------------login services----------------------------------------------------------
	exports.signin = function (req, res) {
	  var name = req.body.email;
	  var pass = req.body.password;
	  var dec_pass = atob(pass);
	  var encrypted_pass = cryptr.encrypt(dec_pass);
	  var sql = "SELECT id, first_name, last_name, phone, dob, gender, email FROM `users` WHERE `email`='" + name + "' and password = '" + encrypted_pass + "'";

	  connection.query(sql, function (err, results) {
			jwtLogin(res,err, results);
	  });
	};
	exports.socialLogin = function (req, res) {
		var email = req.body.email;
		var sql = "SELECT id, first_name, last_name, phone, dob, gender, email FROM `users` WHERE `email`='" + email + "'";

		connection.query(sql, function (err, results) {

			if (results != "") {
				jwtLogin(res,err, results);

			} else if (results == "") {
				var first_name = req.body.first_name;
				var last_name = req.body.last_name;

				var sql = "INSERT INTO `users`(`first_name`,`last_name`,`email`) VALUES ('" + first_name + "','" + last_name + "','" + email + "')";

				connection.query(sql, function (err, result) {
					if (err) {
						console.log('Error', err)
						res.end(JSON.stringify(result));
					} else {
			
						// make login
						var sql = "SELECT id, first_name, last_name, phone, dob, gender, email FROM `users` WHERE `email`='" + email + "'";

						connection.query(sql, function (err, results) {
							jwtLogin(res,err, results);
						});
					}
				});
			}			
		});	  
	};
	exports.update =  (req, res)=> {		
		console.log('usersput')
		const id = req.body.id;
			delete req.body.id;
			
			if (req.body.password) {
				delete req.body.password;
			}

			if (req.body.dob) {
				req.body.dob = new Date(req.body.dob)
			}

    const query = 'UPDATE users SET ? WHERE id = ?'
    connection.query(query, [req.body, id], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
	};
	exports.users = function (req, res) {
	  var sql = `Select * from users where id!=${req.query.id} AND id NOT IN 
		(select friend_id from friends where user_id=${req.query.id})`;
	  connection.query(sql, function (err, result) {
	    if (err) {
	      console.log(err);
	      res.json(err)
	    } else {
	      res.json({
	        users: result
	      });
	    }
	  });
	}

	exports.user = function (req, res) {
	  var sql = "SELECT * FROM `users WHERE email = ?`";
	  connection.query(sql, [req.query.email],function (err, result) {
	    if (err) {
	      console.log(err);
	      res.json(err)
	    } else {
	      res.json({
	        users: result
	      });
	    }
	  });
	}

  // util func
function jwtLogin(res,err, results){
	if (err) {
		console.log(err);
		res.json(err);
	}
	if (results != "") {
		var data = JSON.stringify(results);
		var secret = config.JWT_SECRET;
		var now = Math.floor(Date.now() / 1000),
			iat = (now - 10),
			expiresIn = 3600,
			expr = (now + expiresIn),
			notBefore = (now - 10),
			jwtId = Math.random().toString(36).substring(7);
		var payload = {
			iat: iat,
			jwtid: jwtId,
			audience: 'TEST',
			data: data
		};

		jwt.sign(payload, secret, {
			algorithm: 'HS256',
			expiresIn: expiresIn
		}, function (err, token) {
			if (err) {
				res.json({
					"results": {
						"status": false,
						"msg": 'Error occurred while generating token'
					}
				});
			} else {
				if (token != false) {
					res.header();
					res.json({
						"results": {
							"status": true,
							"token": token,
							"user": results[0]
						}
					});
					res.end();
				} else {
					res.json({
						"results": {
							"status": false,
							"msg": 'Could not create token'
						},
					});
					res.end();
				}

			}
		});
	} else if (results == "") {
		res.json({
			"results": {
				"status": false,
				"msg": 'Not found User!'
			}
		});
		res.end();
	}
}