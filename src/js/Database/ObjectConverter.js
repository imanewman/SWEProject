class PrivateObjectConverter {
    constructor() {
        if(! PrivateObjectConverter.instance){
            PrivateObjectConverter.instance = this;
        }

        return PrivateObjectConverter.instance;
    }

    convertRec(rec) {
        return {
            "RecID": rec.RecID,
            "EventName": rec.EventName,
            "Description": rec.Description,
            "Location": rec.Location,
            "Date": rec.Date,
            "StartTime": rec.StartTime,
            "EndTime": rec.EndTime,
            "Tags": rec.MajorTags, //TODO: not the way to do this
            "draft": rec.Draft,
            "ContactInfo": rec.ContactInfo,
            "WebsiteLink": rec.WebsiteLink,
            "ImgLink": rec.ImageLink,
            "Rules": rec.Rules,
            "UserID": rec.UserId
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
