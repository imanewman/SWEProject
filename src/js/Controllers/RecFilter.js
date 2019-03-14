import Searchbox from './Searchbox.js';
import Observer from './Observer.js';
import CheckboxFactory from "./Checkbox/CheckboxFactory.js";
import Categories from './Categories.js';

class RecFilter extends Observer {
    constructor(recListModal) {
        super();

        this.recListModal = recListModal;
        this.categories = [];
        this.searchString = '';
        this.fuseOptions = {
            shouldSort: true,
            findAllMatches: true,
            includeScore: true,
            threshold: 0.4,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
                {
                    name: "title",
                    weight: 0.7
                },
                {
                    name: "tags",
                    weight: 0.3
                }
            ]
        };

        this.attachFilterMethods();
    }

    attachFilterMethods() {
        this.searchbox = new Searchbox();
        this.searchbox.attachObserver(this);

        this.checkboxes = CheckboxFactory.createAllCheckboxes();

        for (let key in this.checkboxes) {
            if (this.checkboxes.hasOwnProperty(key)) {
                this.checkboxes[key].attachObserver(this);
            }
        }

        this.gatherCategories();
    }

    applyFilters() {
        let recList = this.recListModal.getRecs();
        let recModals = this.recListModal.getRecModals();

        // console.log('Pre Filter:');
        // console.log(JSON.stringify(recList));
        // console.log(recList.length);

        let filteredRecList = this.filterCategories(recList);

        // console.log('Categories:');
        // console.log(JSON.stringify(this.categories));
        // console.log('Post Category Filter:');
        // console.log(filteredRecList);

        let results = this.filterSearchString(filteredRecList);

        // console.log('Post String Filter:');
        // console.log(JSON.stringify(results));

        let ids = [];

        for (let idx = 0; idx < results.length; idx++) {
            let result = results[idx];

            if (result['item'] !== undefined) {
                ids.push(result['item']['id']);
            } else {
                ids.push(result['id']);
            }
        }

        for (let idx = 0; idx < recModals.length; idx++) {
            let recModal = recModals[idx];
            let recId = recModal.getRecId();

            if (ids.includes(recId)) {
                recModal.display();
            } else {
                recModal.hide();
            }
        }
    }

    filterCategories(recList) {
        let filteredRecList = [];

        for (let idx = 0; idx < recList.length; idx++) {
            let rec = recList[idx];
            let tag = rec.getTags();

            console.log(tag);

            if (this.categories.includes(tag)) {
                filteredRecList.push(rec);
            }
        }

        return filteredRecList;
    }

    filterSearchString(recList) {
        let items = [];

        for (let idx = 0; idx < recList.length; idx++) {
            let rec = recList[idx];

            let item = {
                'id': rec.getId(),
                'title': rec.getTitle(),
                'tags': rec.getTags()
            };

            items.push(item);
        }

        if (this.searchString !== '') {
            let fuse = new Fuse(items, this.fuseOptions);

            return fuse.search(this.searchString);
        } else {
            return items;
        }
    }

    gatherCategories() {
        this.categories = [];

        for (let key in this.checkboxes) {
            if (this.checkboxes.hasOwnProperty(key)) {
                let checkbox = this.checkboxes[key];

                if (checkbox.isChecked()) {
                    let name = checkbox.getName();
                    let tag = Categories.nameToTag[name];

                    this.categories.push(tag);
                    this.categories.push(name);
                }
            }
        }

        // console.log(JSON.stringify(this.categories));
    }

    notifyOfUpdate() {
        this.searchString = this.searchbox.getSearchString();

        this.gatherCategories();

        this.applyFilters();
    }
}

export default RecFilter;