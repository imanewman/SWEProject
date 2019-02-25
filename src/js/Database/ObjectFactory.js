import Rec from "../Model/Rec.js";
import User from "../Model/User.js";

class PrivateObjectFactory {
    constructor() {
        if(! PrivateObjectFactory.instance){
            PrivateObjectFactory.instance = this;
        }

        return PrivateObjectFactory.instance;
    }

    initializeRec(recObject) {
        return new Rec(
            recObject.id,
            recObject.title,
            recObject.description,
            recObject.location,
            recObject.date,
            recObject.startTime,
            recObject.endTime,
            recObject.tags,
            recObject.draft,
            recObject.contactInfo,
            recObject.websiteLink,
            recObject.imageLink,
            recObject.rules,
            recObject.ownerId,
            recObject.newFields
        );
    }

    initializeRecList(recListObject) {
        let recList = [];

        for (let recObject in recListObject) {
            if (recListObject.hasOwnProperty(key)) {
                let newRec = this.initializeRec(recObject);

                recList.append(newRec);
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

// module.exports = ObjectFactory;

export default ObjectFactory;