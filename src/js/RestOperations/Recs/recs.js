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

// GET /Recs/id
router.get('/:id', function(req, res) {

	// handler that sends our response and releases connection
   var handler = function(result) {
      res.send(result);  
   };
   
   console.log('GET /Recs/{id}');
   
   cnn.query(`SELECT * FROM Recs WHERE recID = ${req.params.id}`, handler);
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
   
   //cnn.query(`INSERT INTO Recs VALUES (ownerId, title) VALUES (?, ?)`, handler);
});

// PUT /Recs/{id}
router.put('/:id', function(req, res) {
   console.log('PUT /Recs/{id}');
   
   var putId = parseInt(req.params.id, 10);
   
	// handler that sends our response and releases connection
   var handler = function(result) {
      console.log(result.affectedRows + " records updated");
      res.status(200).end();
   };
   
   console.log(req.body); 
   
   var sql = `UPDATE Recs SET EventName = '${req.body.EventName}', ` +
   			 `Location = '${req.body.Location}', Date = '${req.body.Date}', StartTime = '${req.body.StartTime}', ` +
   			 `EndTime = '${req.body.EndTime}', ImgLink = '${req.body.ImgLink}', WebsiteLink = '${req.body.WebsiteLink}', ` +
   			 `Description = '${req.body.Description}', Rules = '${req.body.Rules}', ContactInfo = '${req.body.ContactInfo}'` + 
   			 ` WHERE RecID = ${putId}`
   
   console.log(sql);
   
   
	cnn.query(sql, handler);
   //handler();
});

module.exports = router;