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
var router = Express.Router({caseSensitive: true});
var mysql = require('mysql');
var cnn = require('../../../Database.js')

router.baseURL = '/Prss';

// GET /Users
router.get('/', function(req, res) {
	cnn.connect();
	
	// handler that sends our response and releases connection
   var handler = function(result) {
      res.send(result);
      // figure out how to close connection
   };
   
   console.log('GET /Users');
   //res.send("GET /Users");
   
   cnn.query("SELECT * FROM Users", handler);
});

// POST /Users
router.post('/', function(req, res) {
   console.log('POST /Users');
   // do stuff here
});

module.exports = router;