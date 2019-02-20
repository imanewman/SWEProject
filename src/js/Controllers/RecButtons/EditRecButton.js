import RecButton from "./RecButton.js";

class EditRecButton extends RecButton {
    constructor(rec) {
        super(rec);

        this.editableElementSelectors = [
            '.rec_item_title h3',
            '.rec_item_time h5',
            '.rec_item_location h5',
            '.rec_item_details_description p',
            '.rec_item_details_rules p',
            '.rec_item_details_contact p',
            '.rec_item_details_website a'
        ];
    }

    // attaches click handler to edit button
    attach() {
        $("#" + this.recId + " .edit_button").click( () => {
            this.click();
        });
    }

    // toggles editing this rec
    click() {
        if (this.recModal.editing) {
            this.viewMode();
        } else {
            this.editMode();
        }
    }

    // sets the rec to edit mode
    editMode() {
        $("#" + this.recId).addClass("rec_item_editable");

        for (let idx = 0; idx < this.editableElementSelectors.length; idx++) {
            $("#" + this.recId + ' ' + this.editableElementSelectors[idx])
                .attr('contenteditable', 'true');
        }

        this.recModal.editing = true;
    }

    //sets the rec to view mode
    viewMode() {
        $("#" + this.recId).removeClass("rec_item_editable");

        for (let idx = 0; idx < this.editableElementSelectors.length; idx++) {
            $("#" + this.recId + ' ' + this.editableElementSelectors[idx])
                .attr('contenteditable', 'false');
        }

        this.recModal.editing = false;

        //TODO: remove \n and other special chars
    }
}

export default EditRecButton;