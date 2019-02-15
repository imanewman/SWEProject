class RecListModal {
    //TODO: make way to init different types of lists
    constructor(title = "Upcoming Recs") {
        var currentRecs = [];

        this.attach(title);
    }

    // attaches rec list to body of page
    attach(title) {
        $(document).ready( () => {
            $.get("./RecListModal.html", (data) => {
                $("#scene").append($(data));
                this.setName(title);
                this.display();
            });
        });
    }

    // sets the name of this rec list
    setName(title) { $("#rec_list_title_text").text(title); }

    // displays the rec list
    display() {
        //TODO: animate display
    }

    // hides this rec list
    hide() {
        //TODO: animate hide
    }

    // removes this rec list from the page
    remove() {
        this.hide();
        //TODO: remove from body
    }

    // imports recs into the rec list
    importRecs(importType = REC_IMPORTS.ALL) {
        //TODO: pull right recs from db, create RecModals, display them
    }

    // filters rec list based on search and checkboxes
    filter() {

    }
}

let test = true;

if (test) { const recList = new RecListModal(); }

const REC_IMPORTS = {
    ALL: 0,
    RECOMMENDED: 1,
    WATCHLIST: 2,
    OWNED: 3,
    TEST: 4
}

// module.exports = recList;