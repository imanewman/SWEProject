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

    disconnect() { this.connection.end(); }

    query(queryString, callback = undefined) {

        let res = [];

        if (!callback) callback = (result) => { res = result };

        const queryCallback = (err, result, fields) => {
            if (err) throw err;

            console.log(`query string: ${queryString}`);
            console.log(`request result: ${JSON.stringify(result)}`);

            callback(result);
        };

        this.connection.query(queryString, queryCallback);

        return res;
    }

    get(paramName, element = "", value = "", callback = undefined) {
        var queryString = `SELECT * FROM ${this.connection.escape(paramName)}`;

        if (value && element)
            queryString += ` WHERE ${this.connection.escape(element)} = ${this.connection.escape(value)};`;
        else
            queryString += ';';

        return this.query(queryString, callback);
    }

    put(paramName, dataString, callback = undefined) {
        // update: "UPDATE table_name SET field1 = new-value1, field2 = new-value2"
        // insert: "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')"
        let queryString = `INSERT INTO ${this.connection.escape(paramName)} VALUES (${this.connection.escape(dataString)})`;

        return this.query(queryString, callback);
    }

    delete(paramName, element = "", value = "", callback = undefined) {
        let queryString = `DELETE FROM ${this.connection.escape(paramName)} WHERE ${element} = ${this.connection.escape(value)};`;

        return this.query(queryString, callback);
    }
}

const DatabaseConnector = new PrivateDatabaseConnector();

Object.freeze(DatabaseConnector);

module.exports = DatabaseConnector;
