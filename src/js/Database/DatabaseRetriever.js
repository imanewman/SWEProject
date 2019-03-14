//import ObjectFactory from "./ObjectFactory.js";
//import RecGenerator from "../Algorithms/RecGenerator.js";
//import User from "../Model/User.js";
const request = require("ajax-request");
const ObjectFactory = require("./ObjectFactory.js");
const RecGenerator = require("../Algorithms/RecGenerator.js");
const User = require("../Model/User.js");

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

class PrivateDatabaseRetriever {
    constructor() {
        this.factory = ObjectFactory;

        if(! PrivateDatabaseRetriever.instance){
            PrivateDatabaseRetriever.instance = this;
        }

        return PrivateDatabaseRetriever.instance;
    }

    getRec(recId) {
        var recObject = {"RecID":"2","EventName":"When Social Media Companies, Research Ethics, and Human Rights Collide","Description":"As social media and other tech companies face serious ethical criticism—about privacy, algorithmic bias, emotional manipulation, and other concerns—this talk offers a new “human data research” paradigm for technology’s next wave of social worlds.  Most of these “ethical dilemmas” arise not because bad-intentioned actors, but because methods of investigation and innovation are pushed to capacity and failing us.  For instance, traditional principles of human subject research aren’t suited for online environments today, which are at once familiar software (like a spreadsheet), but also controlled settings (like a lab) and deeply social and dynamic (like a backyard BBQ).  The path forward isn’t in listing an abstract set of principles but hammering out a new, shared course of action that seeks to respect the rights/freedoms of individuals and society in these new online environments.  Researchers and industry need to earn the public’s trust in order to protect their own future.","Location":"Performing Arts Center, 1 Grand Ave, San Luis Obispo, CA","Date":"2019-02-19","StartTime":"11:00:00","EndTime":"13:00:00","MajorTags":"Speech","draft":false,"ContactInfo":"For more information, contact Professor Patrick Lin, Philosophy Department: palin@calpoly.edu","WebsiteLink":"https://www.microsoft.com/en-us/research/people/mlg/","ImgLink":"https://www.pacslo.org/ArticleMedia/Images/PAC/Site/PAC_SLO_logo.jpg","Rules":"None Specified","UserID":"1"};
        $.ajax({
            url: `//localhost:4000/Recs/${recId}`,
            type: 'GET',
            async: false,
            success: (result) => {
                recObject = result;


                //console.log(recObject);
            }
        });

        console.log(recObject);
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

        return RecGenerator.generateUserRecs(user, recs);
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

module.exports = DatabaseRetriever;

//export default DatabaseRetriever;
