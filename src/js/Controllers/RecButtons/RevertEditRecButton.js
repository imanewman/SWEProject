import RecButton from "./RecButton.js";

class RevertEditRecButton extends RecButton {
    constructor(rec) {
        super(rec);
    }

    // attaches click handler to revert edit button
    attach() {
        $("#" + this.recId + " .revert_edit_button").click( () => {
            this.click();
        });
    }

    click() {
        this.recModal.updateInfo();
    }
}

export default RevertEditRecButton;