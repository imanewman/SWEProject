//import Rec from "../Model/Rec.js";
//import User from "../Model/User.js";
const Rec = require("../Model/Rec.js");
const User = require("../Model/User.js");

class PrivateObjectFactory {
    constructor() {
        if(! PrivateObjectFactory.instance){
            PrivateObjectFactory.instance = this;
        }

        return PrivateObjectFactory.instance;
    }

    initializeRec(recObject) {
        return new Rec(
            recObject.RecID,
            recObject.EventName,
            recObject.Description.replace(/[^\x00-\x7F]/g, ""),
            recObject.Location,
            recObject.Date,
            recObject.StartTime,
            recObject.EndTime,
            recObject.MajorTag,
            recObject.draft,
            recObject.ContactInfo,
            recObject.WebsiteLink,
            recObject.ImgLink,
            recObject.Rules.replace(/[^\x00-\x7F]/g, ""),
            recObject.UserID,
        );
    }

    initializeRecList(recListObject) {
        let recList = [];

        for (let recObject in recListObject) {
            if (recListObject.hasOwnProperty(key)) {
                let newRec = this.initializeRec(recObject);

                recList.push(newRec);

                // console.log(JSON.stringify(recObject));
            }
        }

        return recList;
    }

    initializeUser(userObject) {
        return new User(
            userObject.id,
            userObject.email,
            userObject.fullName || "",
            userObject.passwordHash,
            userObject.preferredEvents || [] // may need to parse list
        )
    }

    initializePendingOrganizerList(pendingOrganizerListObject) {
        return new PendingOrganizers(pendingOrganizerListObject); // may need to parse list
    }
}

// Set up object as a Singleton

const ObjectFactory = new PrivateObjectFactory();

Object.freeze(ObjectFactory);

module.exports = ObjectFactory;

//export default ObjectFactory;
