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