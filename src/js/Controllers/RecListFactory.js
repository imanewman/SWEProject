import RecListModal from "./RecListModal.js";

class RecListFactory {
    static createMyRecsList() {
        return new RecListModal('My Recs', RecListModal.REC_IMPORTS.RECOMMENDED);
    }

    static createAllRecsList() {
        return new RecListModal('All Recs', RecListModal.REC_IMPORTS.ALL);
    }

    static createRecWatchlist() {
        return new RecListModal('Rec Watchlist', RecListModal.REC_IMPORTS.WATCHLIST);
    }

    static createMyPosts() {
        return new RecListModal('My Posts', RecListModal.REC_IMPORTS.OWNED);
    }
}

export default RecListFactory;