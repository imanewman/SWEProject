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
            keys: [{ name: "text",
                weight: 0.33 },
                { name: "keywords",
                    weight: 0.67 }]
        }
    }

    applyFilters() {
        var recList = this.recListModal.getRecs();

        recList = this.filterCategories(recList);

        recList = this.filterSearchString(recList);

        //TODO: do something with search
    }

    filterCategories(recList) {
        let filteredRecList = [];

        for (let idx = 0; idx < recList.length; idx++) {
            let rec = recList[idx];
            let tags =  rec.getTags();

            for (let tagIdx = 0; tagIdx < tags.length; tagIdx++) {
                if (tags[tagIdx] in this.categories) {
                    filteredRecList.append(rec);

                    continue;
                }
            }
        }

        return filteredRecList;
    }

    filterSearchString(recList) {
        let items = [];

        let fuse = new Fuse(items, this.fuseOptions);

        return fuse.search(this.searchString);
    }

    notifyOfUpdate() {

    }
}