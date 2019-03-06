"use strict";

const bodyParser = require('body-parser');

const express = require("express");

var path = require("path");

const PORT = 4000;
const app = express();
app.use(bodyParser.json()); // Static paths to be served like index.html and all client side js

app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  console.log("Handling " + req.path + '/' + req.method);
  res.header("Access-Control-Allow-Origin", "http://localhost:63342");
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header("Access-Control-Expose-Headers", 'Content-Length, Content-Type, Location, Date');
  next();
}); // Connect to the DB

var cnn = require("./Database.js");

cnn.connect(); // Load all subroutes

app.use('/Recs', require('./js/RestOperations/Recs/recs.js'));
app.use('/Users', require('./js/RestOperations/Users/users.js')); // Handler of last resort.  Print a stacktrace to console and send a 500 response.

app.use(function (req, res) {
  res.status(404).end();
});
app.use(function (err, req, res, next) {
  res.status(400).json(err);
});
app.listen(PORT, function () {
  console.log("Servers started on port " + PORT);
}); // var serverUrl = "127.0.0.1";
// var http = require("http");
// var fs = require("fs");
// var checkMimeType = true;
//
// console.log("Servers started on port " + PORT);
//
// http.createServer( function(req, res) {
//
//     var now = new Date();
//
//     var filename = "/html/index.html";
//     var ext = path.extname(filename);
//     var localPath = __dirname;
//     var validExtensions = {
//         ".html" : "text/html",
//         ".js": "application/javascript",
//         ".css": "text/css",
//         ".txt": "text/plain",
//         ".jpg": "image/jpeg",
//         ".gif": "image/gif",
//         ".png": "image/png",
//         ".woff": "application/font-woff",
//         ".woff2": "application/font-woff2"
//     };
//
//     var validMimeType = true;
//     var mimeType = validExtensions[ext];
//     if (checkMimeType) {
//         validMimeType = validExtensions[ext] != undefined;
//     }
//
//     if (validMimeType) {
//         localPath += filename;
//         fs.exists(localPath, function(exists) {
//             if(exists) {
//                 console.log("Serving file: " + localPath);
//                 getFile(localPath, res, mimeType);
//             } else {
//                 console.log("File not found: " + localPath);
//                 res.writeHead(404);
//                 res.end();
//             }
//         });
//
//     } else {
//         console.log("Invalid file extension detected: " + ext + " (" + filename + ")")
//     }
//
// }).listen(PORT, serverUrl);
//
// function getFile(localPath, res, mimeType) {
//     fs.readFile(localPath, function(err, contents) {
//         if(!err) {
//             res.setHeader("Content-Length", contents.length);
//             if (mimeType != undefined) {
//                 res.setHeader("Content-Type", mimeType);
//             }
//             res.statusCode = 200;
//             res.end(contents);
//         } else {
//             res.writeHead(500);
//             res.end();
//         }
//     });
// }