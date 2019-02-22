import RecButton from "./RecButton.js";

class EditRecButton extends RecButton {
    constructor(rec) {
        super(rec);
    }

    // attaches click handler to edit button
    attach() {
        $("#" + this.recId + " .edit_button").click( () => {
            this.click();
        });
    }

    // toggles editing this rec
    click() {
        this.recModal.editMode();
    }
}

export default EditRecButton;