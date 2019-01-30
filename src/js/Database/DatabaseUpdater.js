class PrivateDatabaseUpdater {
    contructor() {
        if(! PrivateDatabaseUpdater.instance){
            PrivateDatabaseUpdater.instance = this;
        }

        return PrivateDatabaseUpdater.instance;
    }

    putRec(rec) {}

    deleteRec(rec) {}

    putUser(user) {}

    deleteUser(user) {}

    putPendingOrganizer(userId) {}

    deletePendingOrgaizer(userId) {}
}

// Set up object as a Singleton

const DatabaseUpdater = new PrivateDatabaseUpdater();

Object.freeze(DatabaseUpdater);

export default DatabaseUpdater;