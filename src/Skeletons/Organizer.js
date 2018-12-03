class Organizer extends User {

    constructor(id, email, fullName, passwordHash, preferredEvents, createdRecIds, ratings) {
        super(id, email, fullName, passwordHash, preferredEvents);

        this.createdRecIds = createdRecIds;
        this.ratings = ratings;
    }

    addRec(rec) {

    }

    deleteRec(rec) {

    }

    getAverageRating() {

    }

}