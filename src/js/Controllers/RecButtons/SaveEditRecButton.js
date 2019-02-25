import RecButton from "./RecButton.js";

class SaveEditRecButton extends RecButton {
    constructor(rec) {
        super(rec);
    }

    // attaches click handler to save edit button
    attach() {
        $("#" + this.recId + " .save_edit_button").click( () => {
            this.click();
        });
    }

    click() {
        //TODO: update rec and pass to DB

        this.recModal.displayMode();
        this.recModal.saveInfo();
    }
}

export default SaveEditRecButton;