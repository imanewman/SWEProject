class Rec {
	constructor(
	    id,
	    title,
	    description,
	    location,
        date,
        startTime,
        endTime,
        tags,
        draft,
        contactInfo,
        websiteLink,
        imageLink,
        rules,
        newFields
    ) {
        this.id = id || '1';
        this.title = title || 'Rec Title';
        this.description = description || 'No Description';
        this.rules = rules || '';
		this.location = location || '';
		this.date = date || '';
		this.startTime = startTime || '00:00:00';
		this.endTime = endTime || '00:00:00';
		this.tags = tags || [];
		this.draft = draft || true;
		this.contactInfo = contactInfo || '';
		this.websiteLink = websiteLink || '';
        this.imageLink = imageLink || '';
		this.newFields = newFields || {};
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

    getEndTime() { return this.endTime; }

    setEndTime(endTime) { this.endTime = endTime; }

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

    getWebsiteLink() { return this.websiteLink; }

    setWebsiteLink(link) { this.websiteLink = link; }

    getImageLink() { return this.imageLink; }

    setImageLink(link) { this.imageLink = link; }

    getNewFields() { return this.newFields; }

    addNewField(fieldName, fieldValue) { this.newFields[fieldName] = fieldValue; }

    deleteNewFields(fieldName) { this.newFields.remove(fieldName); }
    
    generateCalendarObj() {}
    
    // returns "<DATE>, from <STARTTIME> to <ENDTIME>"
    getDateString() {
	    if (this.date !== ''
            && this.startTime !== '00:00:00'
            && this.endTime !== '00:00:00') {
            return this.date + ", from " + this.startTime + " to " + this.endTime;
        } else {
	        return "All Day";
        }
	}
}

export default Rec;
