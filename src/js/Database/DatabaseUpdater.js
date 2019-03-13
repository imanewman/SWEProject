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
            url: `//localhost:4000/Recs/${rec.getId()}`,
            type: 'PUT',
            data: JSON.stringify(recObject),
            contentType: "application/json",
            success: (result) => {
                console.log(result);
            }
        });
    }

    postRec(rec) {
        let recObject = this.converter.convertRec(rec);

        $.ajax({
            url: `//localhost:4000/Recs`,
            type: 'POST',
            data: JSON.stringify(recObject),
            contentType: "application/json",
            success: (result) => {
                console.log(result);


            }
        });
    }

    deleteRec(rec) {
        let recId = rec.getId();

        $.ajax({
            url: `//localhost:4000/Recs`,
            type: 'DELETE',
            data: recId,
            contentType: "application/json",
            success: (result) => {
                console.log(result);
            }
        });
    }

    putUser(user) {
        let userObject = this.converter.convertUser(user);

        $.ajax({
            url: `//localhost:4000/Users`,
            type: 'PUT',
            data: JSON.stringify(userObject),
            contentType: "application/json",
            success: (result) => {
                console.log(result);
            }
        });
    }

    putRecToUserWatchlist(rec, user) {
        let recId = rec.getId();
        let userId = user.getId();
        let watchlistObject = {
            'userId': userId,
            'recId': recId
        };

        $.ajax({
            url: `//localhost:4000/Watchlist`,
            type: 'PUT',
            data: watchlistObject,
            contentType: "application/json",
            success: (result) => {
                console.log(result);
            }
        });
    }

    deleteRecFromUserWatchlist(rec, user) {
        let recId = rec.getId();
        let userId = user.getId();
        let watchlistObject = {
            'userId': userId,
            'recId': recId
        };

        $.ajax({
            url: `//localhost:4000/Watchlist`,
            type: 'DELETE',
            data: watchlistObject,
            contentType: "application/json",
            success: (result) => {
                console.log(result);
            }
        });
    }
}

// Set up object as a Singleton

const DatabaseUpdater = new PrivateDatabaseUpdater();

Object.freeze(DatabaseUpdater);

// module.exports = DatabaseUpdater;

export default DatabaseUpdater;