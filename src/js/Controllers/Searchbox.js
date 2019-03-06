import Observable from './Observable.js';

class Searchbox extends Observable {
    constructor() {
        super();

        this.searchString = '';

        this.attachEventHandlers();
    }

    attachEventHandlers() {
        let $searchElement = $("#rec_list_search_input");

        $searchElement.on('input', () => {
            this.searchString = $searchElement.val();

            this.notifyObservers();
        });
    }

    getSearchString() { return this.searchString; }

}

export default Searchbox;