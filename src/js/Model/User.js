class User {

	constructor(id, email, fullName, passwordHash, preferredEvents, createdRecIds, rating, ratingNum) {
		this.id = id;
		this.email = email;
		this.fullName = fullName;
		this.passwordHash = passwordHash;
		this.adminPrivilege = false;
		this.preferredEvents = preferredEvents || ['Charity'];
		this.createdRecIds = createdRecIds;
		this.ratings = rating;
		this.ratingNum = ratingNum;
	}


	setId(id) {
		this.id = id;
	}

	setEmail(email) {
		this.email = email;
	}

	setName(name) {
		this.fullName = name;
	}

	setPassword(passwordHash) {
		//TODO
		this.passwordHash = passwordHash;
	}

    getId() {
		return this.id;
    }

    getEmail() {
		return this.email;
    }

    getName() {
		return this.fullName;
    }

    getPasswordHash() {
		return this.passwordHash;
    }

	watchEvent(recEvent) {

	}

	setAdmin() {
		this.adminPrivilege = true;
	}

    isAdmin() {
		return this.adminPrivilege;
    }

	addPreferredEvents(events) {
		this.preferredEvents = events;
	}

	getPreferredEvents() {
		return this.preferredEvents;
    }
    
    getPreferredTimes() {
        // TODO, currently filler
        return [{start:6, end:10, day:[0,1,2,3]}, {start:12, end:20, day:[4,5,6]}];
    }

}

//export default User;
module.exports = User;
