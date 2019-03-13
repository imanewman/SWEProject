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
   
   //console.log('GET /Recs');
   
   var query = 'SELECT * FROM Recs';
   
   if (req.query.id) {
   	console.log("QUERY FOUND");
      query += ` where userID = ${req.query.id}`;
   }
   
   if (req.query.userWatch) {
   	console.log("WATCHLIST QUERY");
   	query += ` INNER JOIN WatchedEvents WHERE WatchedEvents.RecID = Recs.RecID AND WatchedEvents.UserID = ${req.query.userWatch}`;
   }
   
   console.log(query);
   cnn.query(query, handler);
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
   
   var sql = `INSERT INTO Recs (UserID, EventName, Location, Date, StartTime, EndTime, ImgLink, WebsiteLink, Description, Rules, ContactInfo, MajorTag)` + 
   		    ` VALUES ("${req.body.UserID}", "${req.body.EventName}", "${req.body.Location}", "${req.body.Date}", "${req.body.StartTime}", ` +
   			 `"${req.body.EndTime}", "${req.body.ImgLink}", "${req.body.WebsiteLink}", ` +
   			 `"${req.body.Description}", "${req.body.Rules}", "${req.body.ContactInfo}", "${req.body.MajorTag}")`;
   
   cnn.query(sql, handler);
});

// PUT /Recs/{id} DONE
router.put('/:id', function(req, res) {
   console.log('PUT /Recs/{id}');
   
   var putId = parseInt(req.params.id, 10);
   
	// handler that sends our response and releases connection
   var handler = function(result) {
      console.log(result.affectedRows + " records updated");
      res.status(200).end();
   };
   
   console.log(req.body); 
   
   var sql = `UPDATE Recs SET EventName = "${req.body.EventName}", ` +
   			 `Location = "${req.body.Location}", Date = "${req.body.Date}", StartTime = "${req.body.StartTime}", ` +
   			 `EndTime = "${req.body.EndTime}", ImgLink = "${req.body.ImgLink}", WebsiteLink = "${req.body.WebsiteLink}", ` +
   			 `Description = "${req.body.Description}", Rules = "${req.body.Rules}", ContactInfo = "${req.body.ContactInfo}" ` + 
				 `WHERE RecID = ${putId}`;
   
   console.log(sql);
   
   
	cnn.query(sql, handler);
   //handler();
});

module.exports = router;