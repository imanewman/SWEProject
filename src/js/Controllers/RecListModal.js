import RecModal from "./RecModal.js";
import Rec from "../Model/Rec.js";

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
        this.currentRecModals = [];

        this.attach();
    }

    // attaches rec list to body of page
    attach() {
        $(document).ready( () => {
            $.get("./RecListModal.html", (data) => {
                $("#scene").append($(data));
                $("#rec_list_container").hide();

                this.setName();
                this.importRecs();
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
    display(callback = () => {}) {
        //TODO: animate display cooler, maybe slide in from direction of last page?
        $("#rec_list_container").delay(100).fadeIn(100, callback);
    }

    // hides this rec list
    hide(callback = () => {}) {
        //TODO: animate hide cooler, maybe slide out in direction of next page?
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
        //TODO: pull right recs from db
        if (test) this.currentRecs = testRecs;

        // remove recs currently displayed
        this.removeRecs();

        // add all recs into displayed list
        for (let i = 0; i < this.currentRecs.length; i++) {
            let currentRec = this.currentRecs[i];
            let newRecModal = new RecModal(currentRec);

            this.currentRecModals.push(newRecModal);
        }
    }

    // removes all recs from the rec list
    removeRecs() {
        $("#rec_items").empty();

        this.currentRecModals = [];
    }

    // filters rec list based on search and checkboxes
    filter() {
        //TODO: filter recs based on filters
    }
}

let test = true;

let testRecs = [
    new Rec("0000001"),
    new Rec("0000002"),
    new Rec("0000003"),
    new Rec("0000004"),
    new Rec("0000005"),
    new Rec("0000006"),
];

export {
    RecListModal,
    REC_IMPORTS
};