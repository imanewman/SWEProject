import RecButton from "./RecButton.js";

class DiscardEditRecButton extends RecButton {
    constructor(rec) {
        super(rec);
    }

    // attaches click handler to discard edit button
    attach() {
        $("#" + this.recId + " .discard_edit_button").click( () => {
            this.click();
        });
    }

    click() {
        this.recModal.updateInfo();
        this.recModal.displayMode();
    }
}

export default DiscardEditRecButton;