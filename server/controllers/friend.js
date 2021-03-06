exports.createFriend = function (req, res) {
  const query = sql = 'INSERT INTO friends SET ?';
  connection.query(query, req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getAllFriends = function (req, res) {
  var sql = `Select * from users where id IN 
  (select friend_id from friends where user_id=${req.query.id})`;
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        friends: result
      });
    }
  });
}
exports.updateFriend = function (req, res) {
  const query = 'UPDATE friends SET ? WHERE id = ?'
  connection.query(query, [req.body, req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.removeFriend = function (req, res) {
  const query = `DELETE FROM friends WHERE  user_id=${req.query.user_id} AND friend_id=${req.query.friend_id}`
  connection.query(query, [req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getFriend = function (req, res) {
  const sql = 'SELECT * FROM friends WHERE id=?';
  connection.query(sql, [req.query.id], function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        friend: result
      });
    }
  });
}