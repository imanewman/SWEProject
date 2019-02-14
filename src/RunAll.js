const bodyParser = require('body-parser');
const express = require("express");
var path = require("path");

const PORT = 4000;

const app = express();

app.use(bodyParser.json());

// Static paths to be served like index.html and all client side js
app.use(express.static(path.join(__dirname, 'public')));

// Connect to the DB
//require("./RestServer.js")(app);


// Load all subroutes
app.use('/Recs', require('./js/RestOperations/Recs/recs.js'));
app.use('/Users', require('./js/RestOperations/Users/users.js'));

// Handler of last resort.  Print a stacktrace to console and send a 500 response.
app.use(function(req, res) {
   res.status(404).end();
   res.cnn.release();
});

app.use(function(err, req, res, next) {
   res.status(400).json(err);
   req.cnn && req.cnn.release();
});

app.listen(PORT, function () {
	console.log("Servers started on port " + PORT);
});