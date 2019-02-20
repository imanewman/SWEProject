import RecButton from "./RecButton.js";

class LocateRecButton extends RecButton {
    constructor(rec) {
        super(rec);
    }

    // attaches click handler to locate button
    attach() {
        $("#" + this.recId + " .map_button").click( () => {
            this.click();
        });
    }

    // opens up new window with recs location on google maps
    click() {
        let location = this.rec.getLocation();
        let mapsLink = 'https://www.google.com/maps/search/' + location.replace(' ', '+');

        window.open(mapsLink);
    }
}

export default LocateRecButton;