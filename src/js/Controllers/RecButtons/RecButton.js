class RecButton {
    constructor(rec) {
        this.rec = rec;
        this.recId = rec.getId();
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

default export RecButton;