class PrivateObjectConverter {
    constructor() {
        if(! PrivateObjectConverter.instance){
            PrivateObjectConverter.instance = this;
        }

        return PrivateObjectConverter.instance;
    }

    convertRec(rec) {
        return {
            "RecID": rec.id,
            "EventName": rec.title,
            "Description": rec.description,
            "Location": rec.location,
            "Date": rec.date,
            "StartTime": rec.startTime,
            "EndTime": rec.endTime,
            "Tags": rec.tags, //TODO: not the way to do this
            "draft": rec.draft,
            "ContactInfo": rec.contactInfo,
            "WebsiteLink": rec.websiteLink,
            "ImgLink": rec.imageLink,
            "Rules": rec.rules,
            "UserID": rec.ownerId
        }
    }

    convertUser(user) {
        return {
            "id": user.id,
            "email": user.email,
            "fullName": user.fullName,
            "passwordHash": user.passwordHash,
            "preferredEvents": user.preferredEvents // may need to convert
        }
    }
}

// Set up object as a Singleton

const ObjectConverter = new PrivateObjectConverter();

Object.freeze(ObjectConverter);

module.exports = ObjectConverter;

//export default ObjectConverter;
