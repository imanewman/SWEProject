const DatabaseConnector = require("../../Database.js");
const ObjectFactory = require("./ObjectFactory");

class PrivateDatabaseRetriever {
    contructor() {
        if(! PrivateDatabaseRetriever.instance){
            PrivateDatabaseRetriever.instance = this;
        }

        return PrivateDatabaseRetriever.instance;
    }

    getRec(recId) {
        let recObject = DatabaseConnector.query("SELECT * FROM Recs WHERE id = ${recId}",
            function (err, result, fields) {
                if (err) throw err;
            });

        return ObjectFactory.initializeRec(recObject);
    }

    getRecs() {
        let recsObject = DatabaseConnector.query("SELECT * FROM Recs",
            function (err, result, fields) {
                if (err) throw err;
            });

        return ObjectFactory.initializeRecList(recsObject);
    }

    getUser(userId) {
        let userObject = DatabaseConnector.query("SELECT * FROM Users WHERE id = ${userId}",
            function (err, result, fields) {
                if (err) throw err;
            });

        return ObjectFactory.initializeUser(userObject); //TODO: make different user types
    }

    getPendingOrgaizers() {
        let pendingOrganizersObject = DatabaseConnector.query("SELECT * FROM PendingOrganizers",
            function (err, result, fields) {
                if (err) throw err;
            });

        return ObjectFactory.initializePendingOrganizerList(pendingOrganizersObject);
    }
}

// Set up object as a Singleton

const DatabaseRetriever = new PrivateDatabaseRetriever();

Object.freeze(DatabaseRetriever);

module.exports = DatabaseRetriever;