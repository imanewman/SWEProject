import RecButton from "./RecButton.js";

class HideRecButton extends RecButton {
    constructor(rec) {
        super(rec);
    }

    // attaches click handler to hide button
    attach() {
        $("#" + this.recId + " .hide_button").click( () => {
            this.click();
        });
    }

    click() {
        let $icon = $("#" + this.recId + " .hide_button i");

        if ($icon.hasClass("fa-eye")) {
            $icon.removeClass("fa-eye").addClass("fa-eye-slash");
        } else {
            $icon.removeClass("fa-eye-slash").addClass("fa-eye");
        }
    }
}

export default HideRecButton;