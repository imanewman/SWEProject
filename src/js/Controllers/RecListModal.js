const REC_IMPORTS = {
    ALL: 0,
    RECOMMENDED: 1,
    WATCHLIST: 2,
    OWNED: 3,
    TEST: 4
};

class RecListModal {
    //TODO: make way to init different types of lists
    constructor(
        title = "Upcoming Recs",
        importType = REC_IMPORTS.ALL
    ) {
        this.title = title;
        this.importType = importType;
        this.currentRecs = [];

        this.attach();
    }

    // attaches rec list to body of page
    attach() {
        $(document).ready( () => {
            $.get("./RecListModal.html", (data) => {
                $("#scene").append($(data));
                $("#rec_list_container").hide();

                this.setName();
                this.display();
            });
        });
    }

    // sets the name of this rec list
    setName(title = this.title) { $("#rec_list_title_text").text(title); }

    // sets the rec items import type
    setImportType(importType) {
        if (importType in REC_IMPORTS)
            this.importType = importType
    }

    // displays the rec list
    display() {
        //TODO: animate display
        $("#rec_list_container").delay(100).fadeIn(100);
    }

    // hides this rec list
    hide(callback = () => {}) {
        //TODO: animate hide
        $("#rec_list_container").fadeOut(100, callback);
    }

    // removes this rec list from the page
    remove(callback = () => {}) {
        let removeScene = () => {
            $("#scene").empty().promise().done(callback);
        };

        this.hide(removeScene);
    }

    // imports recs into the rec list
    importRecs() {
        //TODO: pull right recs from db, create RecModals, display them
    }

    // filters rec list based on search and checkboxes
    filter() {

    }
}

let test = false;

if (test) { const recList = new RecListModal(); }

export {
    RecListModal,
    REC_IMPORTS
};