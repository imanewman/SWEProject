const DatabaseConnector = require("../../Database.js");
const ObjectFactory = require("./ObjectFactory.js");

class PrivateDatabaseRetriever {
    constructor() {
        this.database = DatabaseConnector;
        this.factory = ObjectFactory;

        if(! PrivateDatabaseRetriever.instance){
            PrivateDatabaseRetriever.instance = this;
        }

        return PrivateDatabaseRetriever.instance;
    }

    getRec(recId) {
        let recObject = this.database.get("Rec", recId);

        return this.factory.initializeRec(recObject);
    }

    getRecs() {
        let recsObject = this.database.get("Rec");

        return this.factory.initializeRecList(recsObject);
    }

    getUser(userId) {
        let userObject = this.database.get("User", userId);

        return this.factory.initializeUser(userObject); //TODO: make different user types
    }

    getPendingOrgaizers() {
        let pendingOrganizersObject = this.database.get("PendingOrganizer");

        return this.factory.initializePendingOrganizerList(pendingOrganizersObject);
    }
}

// Set up object as a Singleton

const DatabaseRetriever = new PrivateDatabaseRetriever();

Object.freeze(DatabaseRetriever);

module.exports = DatabaseRetriever;