module.exports = function (app) {

    var express = require("express");
    // var cookieParser = require("cookie-parser");
    var database = require("./Database.js");

    database.connect(function () {});

    // var recOperations = require("./RestOperations/recs.js")(database);
    // app.get("./api/recs/:recId", delegateResponseTo(recOperations));

}