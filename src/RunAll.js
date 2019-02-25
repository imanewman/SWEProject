const bodyParser = require('body-parser');
const express = require("express");
var path = require("path");

const PORT = 4000;

const app = express();

app.use(bodyParser.json());

// Static paths to be served like index.html and all client side js
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
   console.log("Handling " + req.path + '/' + req.method);
   res.header("Access-Control-Allow-Origin", "http://localhost:63342");
   res.header("Access-Control-Allow-Credentials", true);
   res.header('Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With');
   res.header('Access-Control-Allow-Methods',
    'GET, PUT, POST, DELETE, OPTIONS');
   res.header("Access-Control-Expose-Headers",
    'Content-Length, Content-Type, Location, Date');
  next();
});

// Connect to the DB
var cnn = require("./Database.js");

cnn.connect();


// Load all subroutes
app.use('/Recs', require('./js/RestOperations/Recs/recs.js'));
app.use('/Users', require('./js/RestOperations/Users/users.js'));

// Handler of last resort.  Print a stacktrace to console and send a 500 response.
app.use(function(req, res) {
   res.status(404).end();
});

app.use(function(err, req, res, next) {
   res.status(400).json(err);
});

app.listen(PORT, function () {
	console.log("Servers started on port " + PORT);
});