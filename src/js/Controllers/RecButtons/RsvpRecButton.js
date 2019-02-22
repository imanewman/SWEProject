import RecButton from "./RecButton.js";

class RsvpRecButton extends RecButton {
    constructor(rec) {
        super(rec);
    }

    // attaches click handler to rsvp button
    attach() {
        $("#" + this.recId + " .rsvp_button").click( () => {
            this.click();
        });
    }

    click() {

    }
}

export default RsvpRecButton;