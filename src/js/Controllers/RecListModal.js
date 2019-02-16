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
                this.setName();
                this.display();
            });
        });
    }

    // sets the name of this rec list
    setName(title = this.title) { $("#rec_list_title_text").text(title); }

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

        $("#scene").empty();
    }

    // imports recs into the rec list
    importRecs() {
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

export {
    RecListModal,
    REC_IMPORTS
};