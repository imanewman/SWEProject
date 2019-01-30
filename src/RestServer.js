module.exports = function (app) {

    var express = require("express");
    var cookieParser = require("cookie-parser");
    // var database = require("./database.js");

    // database.connect(function () {});

}

/* An example request definition and delegation:
var putProposedCourse = require("./rest_operations/putProposedCourse.js")(database);
app.put("/api/v1/:school/proposedCourses/:proposedCourseId", delegateResponseTo(putProposedCourse, undefined, allowAll));
 */