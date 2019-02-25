"use strict";

/*
function getUserById(userId) {

}

function putUser(user) {

}

function deleteUser(userId) {

}

module.exports = {
    getUserById,
    putUser,
    deleteUser
}
*/
var Express = require('express');

var router = Express.Router({
  caseSensitive: true
});

var mysql = require('mysql');

var cnn = require('../../../Database.js'); // GET /Users


router.get('/', function (req, res) {
  // handler that sends our response and releases connection
  var handler = function handler(result) {
    res.send(result);
  };

  console.log('GET /Users');
  cnn.query("SELECT * FROM Users", handler);
}); // POST /Users

router.post('/', function (req, res) {
  console.log('POST /Users'); // handler that sends our response and releases connection

  var handler = function handler(result) {
    res.status(200).end();
  };

  console.log(req.body);
  handler(); // do stuff here
});
module.exports = router;