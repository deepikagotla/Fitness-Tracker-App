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
	  var pass = req.body.password;
	  var email = req.body.email;
	  var dec_pass = atob(pass);
	  var encrypted_pass = cryptr.encrypt(dec_pass);
	  var sql = "INSERT INTO `users`(`id`,`first_name`,`last_name`,`email`,`password`) VALUES ('','" + fname + "','" + lname + "','" + email + "','" + encrypted_pass + "')";

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
	  var sql = "SELECT id, first_name, last_name, email FROM `users` WHERE `email`='" + name + "' and password = '" + encrypted_pass + "'";

	  connection.query(sql, function (err, results) {
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
	  });
	};

	exports.users = function (req, res) {
	  var sql = "SELECT * FROM `users`";
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