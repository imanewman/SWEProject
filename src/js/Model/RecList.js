const DatabaseUpdater = require("../Database/DatabaseUpdater.js");
const DatabaseRetriever = require("../Database/DatabaseRetriever.js");

class PrivateRecList {
    constructor() {
        this.updater = DatabaseUpdater;
        this.retriever = DatabaseRetriever;
    }

    add(newRec) { this.updater.putRec(newRec); }

    delete(recId) { this.updater.deleteRec(recId); }

    get(recId) { return this.retriever.getRec(recId); }

    getAll() { return this.retriever.getRecs(); }
}

//TODO: see if this is how we want to add recs through or not?

const RecList = new PrivateRecList();

Object.freeze(RecList);

module.exports = RecList;