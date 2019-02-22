import RecButton from "./RecButton.js";

class DeleteRecButton extends RecButton {
    constructor(rec) {
        super(rec);
    }

    // attaches click handler to delete button
    attach() {
        $("#" + this.recId + " .delete_button").click( () => {
            this.click();
        });
    }

    click() {

    }
}

export default DeleteRecButton;