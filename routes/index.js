const router = require('express').Router();
const exerciseCtrl = require('./../controllers/exercise');
const friendCtrl = require('./../controllers/friend');

router.post('/exercise', exerciseCtrl.createExercise);
router.get('/exercises', exerciseCtrl.getAllExercises);
router.put('/exercise', exerciseCtrl.updateExercise);
router.delete('/exercise', exerciseCtrl.removeExercise);
router.get('/exercise', exerciseCtrl.getExercise);

router.post('/friend', friendCtrl.createFriend);
router.get('/friends', friendCtrl.getAllFriends);
router.put('/friend', friendCtrl.updateFriend);
router.delete('/friend', friendCtrl.removeFriend);
router.get('/friend', friendCtrl.getFriend);

module.exports = router;