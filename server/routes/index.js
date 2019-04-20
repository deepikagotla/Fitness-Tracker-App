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

router.post('/exercise/routine', exerciseCtrl.createRoutine);
router.get('/exercise/routines', exerciseCtrl.getAllRoutines);
router.put('/exercise/routine', exerciseCtrl.updateRoutine);
router.delete('/exercise/routine', exerciseCtrl.removeRoutine);
router.get('/exercise/routine', exerciseCtrl.getRoutine);

router.post('/workout', exerciseCtrl.createWorkout);
router.get('/workouts', exerciseCtrl.getAllWorkouts);
router.put('/workout', exerciseCtrl.updateWorkout);
router.delete('/workout', exerciseCtrl.removeWorkout);
router.get('/workout', exerciseCtrl.getWorkout);

router.post('/dietplan', exerciseCtrl.createDietplan);
router.get('/dietplans', exerciseCtrl.getAllDietplans);
router.put('/dietplan', exerciseCtrl.updateDietplan);
router.delete('/dietplan', exerciseCtrl.removeDietplan);
router.get('/dietplan', exerciseCtrl.getDietplan);

router.post('/bodytype', exerciseCtrl.createBodytype);
router.get('/bodytypes', exerciseCtrl.getAllBodytypes);
router.put('/bodytype', exerciseCtrl.updateBodytype);
router.delete('/bodytype', exerciseCtrl.removeBodytype);
router.get('/bodytype', exerciseCtrl.getBodytype);

router.post('/product', exerciseCtrl.createProduct);
router.get('/products', exerciseCtrl.getAllProducts);
router.put('/product', exerciseCtrl.updateProduct);
router.delete('/product', exerciseCtrl.removeProduct);
router.get('/product', exerciseCtrl.getProduct);

module.exports = router;