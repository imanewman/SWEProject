var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : "therec.chyktvr3gg46.us-east-1.rds.amazonaws.com",
  user     : "TheRec",
  password : "TheRec309",
  port     : "3306"
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();
