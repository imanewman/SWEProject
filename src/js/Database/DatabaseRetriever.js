import ObjectFactory from "./ObjectFactory.js";
import RecGenerator from "../Algorithms/RecGenerator.js";
import User from "../Model/User.js";

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
            url: `//localhost:4000/Recs`,
            type: 'GET',
            async: false,
            success: (result) => {
                recList = result;
            }
        });

        let recs = this.factory.initializeRecList(recList);

        return recs;
    }

    getRecsByWatchList(userId) {
        var recList = [];

        $.ajax({
            url: `//localhost:4000/Recs?userWatch=${userId}`,
            type: 'GET',
            async: false,
            success: (result) => {
                recList = result;
            }
        });

        let recs = this.factory.initializeRecList(recList);

        return recs;
    }

    getRecsByUserId(userId) {
        var recList = [];

        $.ajax({
            url: `//localhost:4000/Recs?id=${userId}`,
            type: 'GET',
            async: false,
            success: (result) => {
                recList = result;
            }
        });

        let recs = this.factory.initializeRecList(recList);

        return recs;
    }

    getRecsByRecommended(user = new User()) {
        let recs = this.getRecs();

        return RecGenerator.generateUserRecs(user);
    }

    getUser(userId) {
        var userObject = {};

        $.ajax({
            url: `//localhost:4000/Users/${userId}`,
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
            url: `//localhost:4000/Users/${userId}/verify`, //TODO: set this up
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
            url: `//localhost:4000/Tags/${recId}`,
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