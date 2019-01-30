import * from "../Model";

class PrivateObjectFactory {
    contructor() {
        if(! PrivateObjectFactory.instance){
            PrivateObjectFactory.instance = this;
        }

        return PrivateObjectFactory.instance;
    }

    initializeRec(recObject) {
        return new Rec(
            recObject.id,
            recObject.title || "",
            recObject.description || "",
            recObject.location || "",
            recObject.duration || 0,
            recObject.startTime || "",
            recObject.tags || [], // need to change, db has tagId and points to tag table
            recObject.draft || true,
            recObject.contactInfo || "",
            recObject.websiteLink || "",
            recObject.rules || "",
            recObject.newFields || {}
        );
    }

    initializeRecList(recListObject) {
        let recList = new RecList();

        for (let recObject in recListObject) {
            let newRec = this.initializeRec(recObject);
            recList.addRec(newRec);
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

const ObjectFactory = new ObjectFactory();

Object.freeze(ObjectFactory);

export default ObjectFactory;





// I think this is the best way to create a singleton?
// https://www.sitepoint.com/javascript-design-patterns-singleton/
// other way: https://www.dofactory.com/javascript/singleton-design-pattern