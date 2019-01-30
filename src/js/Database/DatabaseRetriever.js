import dbConnection from "../Database.js";
import ObjectFactory from "./ObjectFactory";

class PrivateDatabaseRetriever {
    contructor() {
        if(! PrivateDatabaseRetriever.instance){
            PrivateDatabaseRetriever.instance = this;
        }

        return PrivateDatabaseRetriever.instance;
    }

    getRec(recId) {
        let recObject = dbConnection.query("SELECT * FROM Recs WHERE id = ${recId}",
            function (err, result, fields) {
                if (err) throw err;
            });

        return ObjectFactory.initializeRec(recObject);
    }

    getRecs() {
        let recsObject = dbConnection.query("SELECT * FROM Recs",
            function (err, result, fields) {
                if (err) throw err;
            });

        return ObjectFactory.initializeRecList(recsObject);
    }

    getUser(userId) {
        let userObject = dbConnection.query("SELECT * FROM Users WHERE id = ${userId}",
            function (err, result, fields) {
                if (err) throw err;
            });

        return ObjectFactory.initializeUser(userObject);
    }

    getPendingOrgaizers() {
        let pendingOrganizersObject = dbConnection.query("SELECT * FROM PendingOrganizers",
            function (err, result, fields) {
                if (err) throw err;
            });

        return ObjectFactory.initializePendingOrganizerList(pendingOrganizersObject);
    }
}

// Set up object as a Singleton

const DatabaseRetriever = new PrivateDatabaseRetriever();

Object.freeze(DatabaseRetriever);

export default DatabaseRetriever;