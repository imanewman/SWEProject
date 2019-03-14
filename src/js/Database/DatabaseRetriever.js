//import ObjectFactory from "./ObjectFactory.js";
//import RecGenerator from "../Algorithms/RecGenerator.js";
//import User from "../Model/User.js";
const request = require("ajax-request");
const ObjectFactory = require("./ObjectFactory.js");
const RecGenerator = require("../Algorithms/RecGenerator.js");
const User = require("../Model/User.js");

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

        request({
            url: `//localhost:4000/Recs/${recId}`,
            type: 'GET',
            async: false
          }, (err, resp, body) => {
                recObject = body;

                console.log(err);
                console.log(resp);
                console.log(body);
                console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        });

        let rec = this.factory.initializeRec(recObject);

        return rec;
    }

    getRecs() {
        var recList = [];

        request({
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

        request({
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

        request({
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

        return RecGenerator.generateUserRecs(user, recs);
    }

    getUser(userId) {
        var userObject = {};

        request({
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

        request({
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

        request({
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

module.exports = DatabaseRetriever;

//export default DatabaseRetriever;
