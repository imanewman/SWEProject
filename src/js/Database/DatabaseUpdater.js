import ObjectConverter from"./ObjectConverter.js";

class PrivateDatabaseUpdater {
    constructor() {
        this.converter = ObjectConverter;

        if(! PrivateDatabaseUpdater.instance){
            PrivateDatabaseUpdater.instance = this;
        }

        return PrivateDatabaseUpdater.instance;
    }

    putRec(rec) {
        let recObject = this.converter.convertRec(rec);

        $.ajax({
            url: `//localhost:4000/Recs`,
            type: 'PUT',
            data: recObject,
            success: (result) => {
                console.log(result);
            }
        });
    }

    deleteRec(rec) {
        //TODO
    }

    putUser(user) {
        let userObject = this.converter.convertUser(user);

        $.ajax({
            url: `//localhost:4000/Users`,
            type: 'PUT',
            data: userObject,
            success: (result) => {
                console.log(result);
            }
        });
    }

    putRecToUserWatchlist(rec, user) {

    }

    removeRecFromUserWatchlist(rec, user) {

    }
}

// Set up object as a Singleton

const DatabaseUpdater = new PrivateDatabaseUpdater();

Object.freeze(DatabaseUpdater);

// module.exports = DatabaseUpdater;

export default DatabaseUpdater;