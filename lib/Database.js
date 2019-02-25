"use strict";

const mysql = require('mysql');

class PrivateDatabaseConnector {
  constructor() {
    this.connection = mysql.createConnection({
      host: "therec.chyktvr3gg46.us-east-1.rds.amazonaws.com",
      user: "TheRec",
      password: "TheRec309",
      port: "3306"
    });
  }

  connect() {
    this.connection.connect(function (err) {
      if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
      }

      console.log('Connected to database.');
    });
    this.query("USE TheRec;");
  }

  disconnect() {
    this.connection.end();
  }

  query(queryString) {
    let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    let res = [];
    if (!callback) callback = result => {
      res = result;
    };

    const queryCallback = (err, result, fields) => {
      if (err) throw err;
      console.log(`query string: ${queryString}`);
      console.log(`request result: ${JSON.stringify(result)}`);
      callback(result);
    };

    this.connection.query(queryString, queryCallback);
    return res;
  }

  get(paramName) {
    let element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    let value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    let callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
    var queryString = `SELECT * FROM ${paramName}`;
    if (value && element) queryString += ` WHERE ${element} = ${value};`;else queryString += ';';
    return this.query(queryString, callback);
  }

  put(paramName, dataString) {
    let callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    // update: "UPDATE table_name SET field1 = new-value1, field2 = new-value2"
    // insert: "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')"
    let queryString = `INSERT INTO ${paramName} VALUES (${dataString})`;
    return this.query(queryString, callback);
  }

  delete(paramName) {
    let element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    let value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    let callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
    let queryString = `DELETE FROM ${paramName} WHERE ${element} = ${value};`;
    return this.query(queryString, callback);
  }

}

const DatabaseConnector = new PrivateDatabaseConnector();
Object.freeze(DatabaseConnector);
module.exports = DatabaseConnector;