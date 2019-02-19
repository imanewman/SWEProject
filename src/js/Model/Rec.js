class Rec {

    //TODO: add functionality to auto update recs in database when edited
    //TODO: remove duration, add endTime
	
	constructor(
	    id,
	    title,
	    description,
	    location,
	date,
        duration,
        startTime,
        tags,
        draft,
        contactInfo,
        websiteLink,
        rules,
        newFields
    ) {
		this.location = location;
		this.date = date;
		this.duration =	duration;
		this.startTime = startTime;
		this.tags = tags;
		this.draft = draft;
		this.contactInfo = contactInfo;
		this.websiteLink = websiteLink;
		this.newFields = newFields;
		this.title = title;
		this.id = id;
		this.description = description;
		this.rules = rules;
	}

    getId() { return this.id; }

    getTitle() { return this.title; }

    setTitle(title) { this.title = title; }

    getDescription() { return this.description; }

    setDescription(description) { this.description = description; }

    getLocation() { return this.location; }
    	
    setLocation(location) { this.location = location; }

    getDate() { return this.date; }

    setDate(date) { this.date = date; }

    getDuration() { return this.duration; }

    setDuration(duration) { this.duration = duration; }

    getStartTime() { return this.startTime; }

    setStartTime(startTime) { this.startTime = startTime; }

    getTags() { return this.tags; }

    addTags(tags) { this.tags = tags; }

    removeTag(tagName) { this.tags.remove(tagName); }

    getDraft() { return this.draft; }

    setDraft(draft) { this.draft = draft; }

    getContactInfo() { return this.contactInfo; }

    setContactInfo(contactInfo) { this.contactInfo = contactInfo; }

    getLink() { return this.websiteLink; }

    setLink(link) { this.websiteLink = link; }

    getRules() { return this.rules; }

    setRules(rules) { this.rules = rules; }

    getNewFields() { return this.newFields; }

    addNewField(fieldName, fieldValue) { this.newFields[fieldName] = fieldValue; }

    deleteNewFields(fieldName) { this.newFields.remove(fieldName); }
    
    generateCalendarObj() {}
    
    //TODO: once endTime is complete, create "<DATE>, from <STARTTIME> to <ENDTIME>"
    getDateString() {  }
}

export default Rec;
