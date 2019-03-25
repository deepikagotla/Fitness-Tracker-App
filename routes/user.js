	/**
	* Module dependencies.
	*/
	const router = require('express').Router();
const usersCtrl=require('./../controllers/users');
const jwtMiddleware = require('express-jwt');

router.post('/signup', usersCtrl.signup);
router.post('/signin', usersCtrl.signin);
router.get('/users',jwtMiddleware({ secret:  config.JWT_SECRET}), usersCtrl.users);

module.exports = router;