import ObjectFactory from "./ObjectFactory.js";

class PrivateDatabaseRetriever {
    constructor() {
        this.factory = ObjectFactory;

        if(! PrivateDatabaseRetriever.instance){
            PrivateDatabaseRetriever.instance = this;
        }

        return PrivateDatabaseRetriever.instance;
    }

    getRec(recId) {
        var recObject = {};

        $.ajax({
            url: `//localhost:4000/Recs/${recId}`,
            type: 'GET',
            async: false,
            success: (result) => {
                recObject = result;

                console.log(recObject);
            }
        });

        let rec = this.factory.initializeRec(recObject);

        return rec;
    }

    getRecs() {
        var recList = [];

        $.ajax({
            url: `Recs`,
            type: 'GET',
            async: false,
            success: (result) => {
                recList = result;
            }
        });

        let recs = this.factory.initializeRecList(recList);

        return recs;
    }

    getUser(userId) {
        var userObject = {};

        $.ajax({
            url: `Users/${userId}`,
            type: 'GET',
            async: false,
            success: (result) => {
                userObject = result;
            }
        });

        let user = this.factory.initializeUser(userObject);

        return user;
    }

    authenticateUser(user) {
        let userObject = this.converter.convertUser(user);
        var authenticated = false;

        $.ajax({
            url: `Users/${userId}/verify`, //TODO: set this up
            type: 'PUT',
            async: false,
            success: (result) => {
                authenticated = result;
            }
        });

        return authenticated;
    }

    getTags(recId) {
        var tagList = [];

        $.ajax({
            url: `Tags/${recId}`,
            type: 'GET',
            async: false,
            success: (result) => {
                tagList = result;
            }
        });

        return tagList;
    }
}

// Set up object as a Singleton

const DatabaseRetriever = new PrivateDatabaseRetriever();

Object.freeze(DatabaseRetriever);

// module.exports = DatabaseRetriever;

export default DatabaseRetriever;