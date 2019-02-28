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
        //TODO: make delete modal to make sure they want to delete, and also delete from DB
        this.recModal.remove();
    }
}

export default DeleteRecButton;