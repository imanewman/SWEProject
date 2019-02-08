
// Start the server, add the http server and rest server

const express = require("express");
const app = express();

const PORT = 4000;

require("./RestServer.js")(app);
// require("./HttpServer.js")(app);


app.get('/', (req, res) => res.send('Hello World!'));


app.listen(PORT, function () {
	console.log("Servers started on port " + PORT);
});