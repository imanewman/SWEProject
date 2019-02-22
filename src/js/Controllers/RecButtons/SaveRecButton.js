import RecButton from "./RecButton.js";

class SaveRecButton extends RecButton {
    constructor(recModal) {
        super(recModal);
    }

    // attaches click handler to save button
    attach() {
        $("#" + this.recId + " .save_button").click( () => {
            this.click();
        });
    }

    // saves this rec to the users watchlist
    click() {
        //TODO: toggle save on and off
        let $saveIcon = $("#" + this.recId + " .save_button i");

        RecButton.toggleIconFill($saveIcon);
    }
}

export default SaveRecButton;