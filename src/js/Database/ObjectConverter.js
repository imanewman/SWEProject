class PrivateObjectConverter {
    constructor() {
        if(! PrivateObjectConverter.instance){
            PrivateObjectConverter.instance = this;
        }

        return PrivateObjectConverter.instance;
    }

    convertRec(rec) {
        return {
            "RecID": rec.getId(),
            "EventName": rec.getTitle(),
            "Description": rec.getDescription(),
            "Location": rec.getLocation(),
            "Date": rec.getDate(),
            "StartTime": rec.getStartTime(),
            "EndTime": rec.getEndTime(),
            "MajorTags": rec.getTags(),
            "draft": rec.getDraft(),
            "ContactInfo": rec.getContactInfo(),
            "WebsiteLink": rec.getWebsiteLink(),
            "ImgLink": rec.getImageLink(),
            "Rules": rec.getRules(),
            "UserID": rec.getOwnerId()
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

// module.exports = ObjectConverter;

export default ObjectConverter;