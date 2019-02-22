import RecButton from "./RecButton.js";

class ReportRecButton extends RecButton {
    constructor(rec) {
        super(rec);
    }

    // attaches click handler to report button
    attach() {
        $("#" + this.recId + " .report_button").click( () => {
            this.click();
        });
    }

    // reports this rec
    click() {
        //TODO: create report modal and bring it up with this (a bit more intensive)
        let $reportIcon = $("#" + this.recId + " .report_button i");

        RecButton.toggleIconFill($reportIcon);
    }
}

export default ReportRecButton;