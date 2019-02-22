import RecButton from "./RecButton.js";

class ExpandRecButton extends RecButton {
    constructor(recModal) {
        super(recModal);
    }

    // attaches click handler to save button
    attach() {
        $("#" + this.recId + " .rec_item_button_dropdown i").click( () => {
            this.click();
        });
    }

    // toggles whether the rec is open
    click() {
        if ($("#" + this.recId).hasClass("rec_item_active")) {
            this.collapse();
        } else {
            this.expand();
        }
    }

    // expands this rec and collapses others
    expand() {
        //TODO: center scroll on this rec when it expands
        $(".rec_item").removeClass("rec_item_active");

        $("#" + this.recId).addClass("rec_item_active");
    }

    // collapses the rec
    collapse() {
        $("#" + this.recId).removeClass("rec_item_active")
    }
}

export default ExpandRecButton;