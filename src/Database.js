module.exports = {
    connect: connect,
    disconnect: disconnect,
}

var client;

var mysql = require('mysql');

function connect () {
    var SQLClient = mysql.createConnection({
        host: "localhost",
        user: "yourusername",
        password: "yourpassword"
    });

    SQLClient.connect(function(err, cli) {

            if (err) {
                throw "Error: could not connect to database";
            }

            console.log("Connection to database established");

            client = cli;

            client.on("error", function () {
                console.log("Error: database connection error");
            });

            client.on("close", function () {
                console.log("Error: database connection closed");
            });

            client.on("timeout", function () {
                console.log("Error: database connection lost");
            });
        });
}

function disconnect () {
    // if(client) client.close();
}