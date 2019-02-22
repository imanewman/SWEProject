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

    }
}

export default HideRecButton;