/*
// const recModel = require("../db/models/rec.js");

function getRecs() {
    // return recModel.findAll();
}

function getRecById(recId) {
    // return recModel.findById(id);
}

function putRec(rec) {

}

function deleteRec(recId) {

}

module.exports = {
    getRecs,
    getRecById,
    putRec,
    deleteRec
}
*/

var Express = require('express');
var router = Express.Router({caseSensitive: true});
var mysql = require('mysql');
var cnn = require('../../../Database.js')

// GET /Recs
router.get('/', function(req, res) {

	// handler that sends our response and releases connection
   var handler = function(result) {
      res.send(result);  
   };
   
   console.log('GET /Recs');
   
   cnn.query("SELECT * FROM Recs", handler);
});

// POST /Recs
router.post('/', function(req, res) {
   console.log('POST /Recs');
   
	// handler that sends our response and releases connection
   var handler = function(result) {
      res.status(200).end();  
   };
   
   console.log(req.body);
   
   handler();
   // do stuff here
});

module.exports = router;