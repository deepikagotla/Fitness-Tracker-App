/**
 * Module dependencies.
 */

var express = require('express'),
http = require('http'),
path = require('path');
var cors = require('cors');
var bodyParser = require("body-parser");
var app = express();

app.use(cors());

global.config = require('./config/config.json')

require('dotenv').config();
require('./config/db');
var user = require('./routes/user');

/**
 * creating mysql connection.
 */


/**
 * all environments.
 */
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

/**
 * routes.
 */

app.use('/',user);
/**
 * creating server.
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Server is listening on port ' + app.get('port'));
});