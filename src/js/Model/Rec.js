class Rec {
	
	constructor(
	    id,
	    title,
	    description,
	    location,
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

    setLocation(location) { this.location = location; }

    setDuration(duration) { this.duration = duration; }

    setStartTime(startTime) { this.startTime = startTime; }

    addTags(tags) { this.tags = tags; }

    setDraft(draft) { this.draft = draft; }

    setContactInfo(contactInfo) { this.contactInfo = contactInfo; }

    setLink(link) { this.websiteLink = link; }

    addNewField(fieldName, fieldValue) { this.newFields[fieldName] = fieldValue; }

    deleteNewFields(filedName) { this.newFields.remove(fieldName); }

    setTitle(title) { this.title = title; }

    setDescription(description) { this.description = description; }

    setRules(rules) { this.rules = rules; }

    removeTag(tagName) { this.tags.remove(tagName); }

    getLocation() { return this.location; }

    getDuration() { return this.duration; }

    getStartTime() { return this.startTime; }

    getTags() { return this.tags; }

    getDraft() { return this.draft; }

    getContactInfo() { return this.contactInfo; }

    getLink() { return this.websiteLink; }

    getNewFields() { return this.newFields; }

    getTitle() { return this.title; }

    getId() { return this.id; }

    getDescription() { return this.description; }

    getRules() { return this.rules; }

	generateCalendarObj() {}
}