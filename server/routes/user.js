	/**
	* Module dependencies.
	*/
	const router = require('express').Router();
const usersCtrl=require('./../controllers/users');
const jwtMiddleware = require('express-jwt');

router.post('/signup', usersCtrl.signup);
router.post('/signin/social', usersCtrl.socialLogin);
router.post('/signin', usersCtrl.signin);
router.put('/users', usersCtrl.update);
// router.get('/users',jwtMiddleware({ secret:  config.JWT_SECRET}), usersCtrl.users);
// router.get('/user',jwtMiddleware({ secret:  config.JWT_SECRET}), usersCtrl.user);
router.get('/users', usersCtrl.users);
router.get('/user', usersCtrl.user);

module.exports = router;