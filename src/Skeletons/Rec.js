class Rec {
	
	constructor(location, duration, startTime, tags, draft, eventType, contactInfo, websiteLink, newFields, description) {
		this.location = location;
		this.duration =	duration;
		this.startTime = startTime;
		this.tags = tags;
		this.draft = draft;
		this.eventType = eventType;
		this.contactInfo = contactInfo;
		this.websiteLink = websiteLink;
		this.newFields = newFields;
		this.description = description;
	}

    setLocation(location) {
		this.location = location;
    }

    setDuration(duration) {
		this.duration = duration;
    }

    setStartTime(startTime) {
		this.startTime = startTime;
    }

    setTags(tags) {
		this.tags = tags;
    }

    setDraft(draft) {
		this.draft = draft;
    }

    setEventType(eventType) {
		this.eventType = eventType;
    }

    setContactInfo(contactInfo) {
		this.contactInfo = contactInfo;
    }

    setWebsiteLink(websiteLink) {
		this.websiteLink = websiteLink;
    }

    setNewFields(newFields) {
		this.newFields = newFields;
    }

    setDescription(description) {
		this.description = description;
    }

    getLocation() {
		return this.location;
    }

    getDuration() {
		return this.duration;
    }

    getStartTime() {
		return this.startTime;
    }

    getTags() {
		return this.tags;
    }

    getDraft() {
		return this.draft;
    }

    getEventType() {
		return this.eventType;
    }

    getContactInfo() {
		return this.contactInfo;
    }

    getWebsiteLink() {
		return this.websiteLink;
    }

    getNewFields() {
		return this.newFields;
    }

    getDescription() {
		return this.description;
    }

	generateCalendarObj() {

	}
}