var mysql = require('mysql');

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
    }

    query(queryString, cb) {
        this.connection.query(queryString, cb);
    }

    disconnect() {
        this.connection.end();
    }
}

const DatabaseConnector = new PrivateDatabaseConnector();

Object.freeze(DatabaseConnector);

module.exports = DatabaseConnector;