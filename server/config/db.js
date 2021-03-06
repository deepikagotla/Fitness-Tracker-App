const mysql = require('mysql');

let pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  connectionLimit: process.env.DB_POOL || 10,
  database: process.env.DB_NAME || "trackapp"
});

pool.getConnection(function (err, connection) {
  if (err) console.log('Error while connecting to databse', err);
  else {
    console.log('Database connected');
    global.connection = connection;
  }
});