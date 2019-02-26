import RecButton from "./RecButton.js";

class HideRecButton extends RecButton {
    constructor(rec) {
        super(rec);

        this.hidden = this.rec.getDraft();

        this.updateHidden();
    }

    // attaches click handler to hide button
    attach() {
        $("#" + this.recId + " .hide_button").click( () => {
            this.click();
        });
    }

    click() {
        this.hidden = (!this.hidden);

        this.updateHidden();
    }

    updateHidden() {
        this.rec.setDraft(this.hidden);

        this.toggleIcon();

        this.toggleOpacity();
    }

    toggleIcon() {
        let $icon = $("#" + this.recId + " .hide_button i");

        if (this.hidden) {
            $icon.removeClass("fa-eye").addClass("fa-eye-slash");
        } else {
            $icon.removeClass("fa-eye-slash").addClass("fa-eye");
        }
    }

    toggleOpacity() {
        let $recElement = $("#" + this.recId);

        if (this.hidden) {
            $recElement.animate({'opacity': '0.7'}, 200);
        } else {
            $recElement.animate({'opacity': '1'}, 200);
        }
    }
}

export default HideRecButton;