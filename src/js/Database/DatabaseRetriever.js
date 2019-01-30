import dbConnection from "../Database.js"

class PrivateDatabaseRetriever {
    contructor() {
        if(! PrivateDatabaseRetriever.instance){
            PrivateDatabaseRetriever.instance = this;
        }

        return PrivateDatabaseRetriever.instance;
    }

    getRec(recId) {
        return dbConnection.query("SELECT * FROM recs WHERE id = ${recId}", function (err, result, fields) {
            if (err) throw err;
        });
    }

    getRecs() {
        return dbConnection.query("SELECT * FROM recs", function (err, result, fields) {
            if (err) throw err;
        });
    }

    getUser(userId) {
        return dbConnection.query("SELECT * FROM users WHERE id = ${userId}", function (err, result, fields) {
            if (err) throw err;
        });
    }

    getPendingOrgaizers() {
        return dbConnection.query("SELECT * FROM pendingOrganizers", function (err, result, fields) {
            if (err) throw err;
        });
    }
}

// Set up object as a Singleton

const DatabaseRetriever = new PrivateDatabaseRetriever();

Object.freeze(DatabaseRetriever);

export default DatabaseRetriever;