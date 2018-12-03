class Rec {
	
	constructor(location, duration, startTime, tags, draft, eventType, contactInfo, websiteLink, newFields, title, id, description, rules) {
		this.location = location;
		this.duration =	duration;
		this.startTime = startTime;
		this.tags = tags;
		this.draft = draft;
		this.eventType = eventType;
		this.contactInfo = contactInfo;
		this.websiteLink = websiteLink;
		this.newFields = newFields;
		this.title = title;
		this.id = id;
		this.description = description;
		this.rules = rules;
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

    addTags(tags) {
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

    setLink(link) {
		this.websiteLink = link;
    }

    addNewFields(newFields) {

    }

    deleteNewFields(newFields) {

    }

    setTitle(title) {
	    this.title = title;
    }

    setId(id) {
	    this.id = id;
    }

    setDescription(description) {
		this.description = description;
    }

    setRules(rules) {
	    this.rules = rules;
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

    removeTags(tags) {

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

    getLink() {
		return this.websiteLink;
    }

    getNewFields() {
		return this.newFields;
    }

    getTitle() {
	    return this.title;
    }

    getId() {
	    return this.id;
    }

    getDescription() {
		return this.description;
    }

    getRules() {
	    return this.rules;
    }

	generateCalendarObj() {

	}
}