class Consumer extends User {

    constructor(id, email, fullName, passwordHash, preferredEvents, watchedEvents) {
        super(id, email, fullName, passwordHash, preferredEvents);

        this.watchedEvents = watchedEvents;
    }

    importCalendar() {

    }
}