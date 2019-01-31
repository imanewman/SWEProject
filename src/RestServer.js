module.exports = function (app) {

    // var express = require("express");
    // var cookieParser = require("cookie-parser");
    const DatabaseConnector = require("./Database.js");

    DatabaseConnector.connect();

    // var recOperations = require("./RestOperations/recs.js")(database);
    // app.get("./api/recs/:recId", delegateResponseTo(recOperations));
}