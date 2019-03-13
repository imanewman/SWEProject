import RecButton from "./RecButton.js";
import DatabaseUpdater from '../../Database/DatabaseUpdater.js';

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
        this.recModal.remove();

        // DatabaseUpdater.deleteRec(this.rec);
    }
}

export default DeleteRecButton;