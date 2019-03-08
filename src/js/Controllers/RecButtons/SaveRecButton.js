import RecButton from "./RecButton.js";
import DatabaseUpdater from '../../Database/DatabaseUpdater.js';
import {
    CurrentUser
} from '../MainController.js';

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
        let $saveIcon = $("#" + this.recId + " .save_button i");

        RecButton.toggleIconFill($saveIcon);

        if ($saveIcon.hasClass("fas")) {
            DatabaseUpdater.putRecToUserWatchlist(this.rec, CurrentUser);
        } else {
            DatabaseUpdater.removeRecFromUserWatchlist(this.rec, CurrentUser);
        }
    }
}

export default SaveRecButton;