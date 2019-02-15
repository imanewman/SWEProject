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

router.baseURL = '/Prss';

// GET /Recs
router.get('/', function(req, res) {
   console.log('GET /Recs');
   res.send("GET /Recs");
   
});

// POST /Recs
router.post('/', function(req, res) {
   console.log('POST /Recs');
   // do stuff here
});

module.exports = router;