class PrivateObjectConverter {
    constructor() {
        if(! PrivateObjectConverter.instance){
            PrivateObjectConverter.instance = this;
        }

        return PrivateObjectConverter.instance;
    }

    convertRec(rec) {
        return {
            "id": rec.id,
            "title": rec.title || "",
            "description": rec.description,
            "location": rec.location,
            "duration": rec.duration,
            "startTime": rec.startTime,
            "tags": rec.tags, //may need to convert
            "draft": rec.draft,
            "contactInfo": rec.contactInfo,
            "websiteLink": rec.websiteLink,
            "rules": rec.rules,
            "newFields": rec.newFields
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