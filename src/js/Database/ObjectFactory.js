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
            recObject.Description,
            recObject.Location,
            recObject.Date,
            recObject.StartTime,
            recObject.EndTime,
<<<<<<< HEAD
            recObject.Tags,
=======
            recObject.MajorTag,
>>>>>>> master
            recObject.Draft,
            recObject.ContactInfo,
            recObject.WebsiteLink,
            recObject.ImageLink,
            recObject.Rules,
            recObject.UserID,
            //recObject.newFields
        );
    }

    initializeRecList(recListObject) {
        let recList = [];

        for (let recObject in recListObject) {
            if (recListObject.hasOwnProperty(key)) {
                let newRec = this.initializeRec(recObject);

<<<<<<< HEAD
                recList.append(newRec);
=======
                recList.push(newRec);

                // console.log(JSON.stringify(recObject));
>>>>>>> master
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
