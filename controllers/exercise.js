exports.createExercise = function (req, res) {
  const query = sql = 'INSERT INTO exercises SET ?';
  connection.query(query, req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getAllExercises = function (req, res) {
  var sql = 'SELECT * FROM `exercises`';
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        exercises: result
      });
    }
  });
}
exports.updateExercise = function (req, res) {
  const query = 'UPDATE exercises SET ? WHERE id = ?'
  connection.query(query, [req.body, req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.removeExercise = function (req, res) {
  const query = 'DELETE FROM exercises WHERE id = ?'
  connection.query(query, [req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getExercise = function (req, res) {
  const sql = 'SELECT * FROM exercises WHERE id=?';
  connection.query(sql, [req.query.id], function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        exercise: result
      });
    }
  });
}

exports.createRoutine = function (req, res) {
  const query = sql = 'INSERT INTO routines SET ?';
  connection.query(query, req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getAllRoutines = function (req, res) {
  var sql = 'SELECT * FROM `routines`';
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        routines: result
      });
    }
  });
}
exports.updateRoutine = function (req, res) {
  const query = 'UPDATE routines SET ? WHERE id = ?'
  connection.query(query, [req.body, req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.removeRoutine = function (req, res) {
  const query = 'DELETE FROM routines WHERE id = ?'
  connection.query(query, [req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getRoutine = function (req, res) {
  const sql = 'SELECT * FROM routines WHERE id=?';
  connection.query(sql, [req.query.id], function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        routine: result
      });
    }
  });
}


exports.createWorkout = function (req, res) {
  const query = sql = 'INSERT INTO workouts SET ?';
  connection.query(query, req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getAllWorkouts = function (req, res) {
  var sql = 'SELECT * FROM `workouts`';
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        workouts: result
      });
    }
  });
}
exports.updateWorkout = function (req, res) {
  const query = 'UPDATE workouts SET ? WHERE id = ?'
  connection.query(query, [req.body, req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.removeWorkout = function (req, res) {
  const query = 'DELETE FROM workouts WHERE id = ?'
  connection.query(query, [req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getWorkout = function (req, res) {
  const sql = 'SELECT * FROM workouts WHERE id=?';
  connection.query(sql, [req.query.id], function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        workout: result
      });
    }
  });
}

exports.createDietplan = function (req, res) {
  const query = sql = 'INSERT INTO diet_plans SET ?';
  connection.query(query, req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getAllDietplans = function (req, res) {
  var sql = 'SELECT * FROM `diet_plans`';
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        dietPlans: result
      });
    }
  });
}
exports.updateDietplan = function (req, res) {
  const query = 'UPDATE diet_plans SET ? WHERE id = ?'
  connection.query(query, [req.body, req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.removeDietplan = function (req, res) {
  const query = 'DELETE FROM diet_plans WHERE id = ?'
  connection.query(query, [req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getDietplan = function (req, res) {
  const sql = 'SELECT * FROM diet_plans WHERE id=?';
  connection.query(sql, [req.query.id], function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        dietPlan: result
      });
    }
  });
}

exports.createBodytype = function (req, res) {
  const query = sql = 'INSERT INTO body_types SET ?';
  connection.query(query, req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getAllBodytypes = function (req, res) {
  var sql = 'SELECT * FROM `body_types`';
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        bodyTypes: result
      });
    }
  });
}
exports.updateBodytype = function (req, res) {
  const query = 'UPDATE body_types SET ? WHERE id = ?'
  connection.query(query, [req.body, req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.removeBodytype = function (req, res) {
  const query = 'DELETE FROM body_types WHERE id = ?'
  connection.query(query, [req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getBodytype = function (req, res) {
  const sql = 'SELECT * FROM body_types WHERE id=?';
  connection.query(sql, [req.query.id], function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        bodyType: result
      });
    }
  });
}

exports.createProduct = function (req, res) {
  const query = sql = 'INSERT INTO products SET ?';
  connection.query(query, req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getAllProducts = function (req, res) {
  var sql = 'SELECT * FROM `products`';
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        products: result
      });
    }
  });
}
exports.updateProduct = function (req, res) {
  const query = 'UPDATE products SET ? WHERE id = ?'
  connection.query(query, [req.body, req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.removeProduct = function (req, res) {
  const query = 'DELETE FROM products WHERE id = ?'
  connection.query(query, [req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getProduct = function (req, res) {
  const sql = 'SELECT * FROM products WHERE id=?';
  connection.query(sql, [req.query.id], function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        product: result
      });
    }
  });
}