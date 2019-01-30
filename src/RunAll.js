
// Start the server, add the http server and rest server

var express = require("express");
var app = express();

var PORT = 4000;

require("./RestServer.js")(app);
// require("./HttpServer.js")(app);

app.listen(PORT, function () {

	console.log("Servers started on port " + PORT);
});
