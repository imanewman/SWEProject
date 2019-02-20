class RecButton {
    constructor(recModal) {
        this.recModal = recModal;
        this.rec = recModal.getRec();
        this.recId = this.rec.getId();

        this.attach();
    }

    attach() {}

    click() {}

    // toggles whether an FA icon is filled in
    static toggleIconFill($icon) {
        if ($icon.hasClass("fas")) {
            $icon.removeClass("fas").addClass("far");
        } else {
            $icon.removeClass("far").addClass("fas");
        }
    }
}

export default RecButton;