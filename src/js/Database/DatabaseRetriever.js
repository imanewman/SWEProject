import dbConnection from "../Database.js"

class PrivateDatabaseRetriever {
    contructor() {
        if(! PrivateDatabaseRetriever.instance){
            PrivateDatabaseRetriever.instance = this;
        }

        return PrivateDatabaseRetriever.instance;
    }

    getRec(recId) {
        dbConnection.query("SELECT ${recId} FROM recs", function (err, result, fields) {
            if (err) throw err;
        });
    }

    getRecs() {
        dbConnection.query("SELECT * FROM recs", function (err, result, fields) {
            if (err) throw err;
        });
    }

    getUser(userId) {
        dbConnection.query("SELECT ${userId} FROM users", function (err, result, fields) {
            if (err) throw err;
        });
    }

    getPendingOrgaizers() {
        dbConnection.query("SELECT * FROM pendingOrganizers", function (err, result, fields) {
            if (err) throw err;
        });
    }
}

// Set up object as a Singleton

const DatabaseRetriever = new PrivateDatabaseRetriever();

Object.freeze(DatabaseRetriever);

export default DatabaseRetriever;