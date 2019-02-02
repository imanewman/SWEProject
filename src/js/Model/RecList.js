const DatabaseUpdater = require("../Database/DatabaseUpdater.js");
const DatabaseRetriever = require("../Database/DatabaseRetriever.js");

class PrivateRecList {
    constructor() {
        this.updater = DatabaseUpdater;
        this.retriever = DatabaseRetriever;

        // this.recs = this.retriever.getRecs();
    }

    add(newRec) {
        this.updater.putRec(newRec);

        // this.recs = this.retriever.getRecs();
    }

    delete(recId) {
        this.updater.deleteRec(recId);

        // this.recs = this.retriever.getRecs();
    }

    get(recId) {
        // this.recs = this.retriever.getRecs();

        return this.retriever.getRec(recId);
    }
}

//TODO: see if this is how we want to add recs through or not?

const RecList = new PrivateRecList();

Object.freeze(RecList);

module.exports = RecList;