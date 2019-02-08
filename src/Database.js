const mysql = require('mysql');

class PrivateDatabaseConnector {
    constructor() {
        this.connection = mysql.createConnection({
            host: "therec.chyktvr3gg46.us-east-1.rds.amazonaws.com",
            user: "TheRec",
            password: "TheRec309",
            port: "3306"
        });

        this.defaultErrorHandler = function (err, result, fields) {
            if (err) throw err;

            console.log(`request result: ${result}`);
        };
    }

    connect() {
        this.connection.connect(function (err) {
            if (err) {
                console.error('Database connection failed: ' + err.stack);
                return;
            }

            console.log('Connected to database.');
        });
    }

    disconnect() { this.connection.end(); }

    query(queryString, cb = this.defaultErrorHandler) { this.connection.query(queryString, cb); }

    get(paramName, id = "") {
        var queryString = `SELECT * FROM ${paramName}`;

        if (id) queryString += ` WHERE id = ${id}`;

        return this.query(queryString);
    }

    put(paramName, id) {
        // update: "UPDATE table_name SET field1 = new-value1, field2 = new-value2"
        // insert: "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')"
        let queryString = ``;

        return this.query(queryString);
    }

    delete(paramName, id) {
        let queryString = `DELETE FROM ${paramName} WHERE id = ${id}`;

        return this.query(queryString);
    }
}

const DatabaseConnector = new PrivateDatabaseConnector();

Object.freeze(DatabaseConnector);

module.exports = DatabaseConnector;