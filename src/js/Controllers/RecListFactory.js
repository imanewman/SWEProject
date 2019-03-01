import RecListModal from "./RecListModal.js";

class RecListFactory {
    static createMyRecsList() {
        return new RecListModal('My Recs', RecListModal.RECOMMENDED);
    }

    static createAllRecsList() {
        return new RecListModal('All Recs', RecListModal.ALL);
    }

    static createRecWatchlist() {
        return new RecListModal('Rec Watchlist', RecListModal.WATCHLIST);
    }

    static createMyPosts() {
        return new RecListModal('My Posts', RecListModal.OWNED);
    }
}

export default RecListFactory;