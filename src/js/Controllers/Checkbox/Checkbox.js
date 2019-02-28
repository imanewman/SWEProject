class Checkbox {
    constructor(name) {
        this.name = name;
        this.id = name.replace(' ', '_') + '_checkbox';
        this.checked = true;
        this.observers = [];

        this.attach();
    }

    // attaches click handler to edit button
    attach() {
        $(document).ready( () => {
            $.get("./Checkbox.html", (data) => {
                let $checkbox = $(data);

                $checkbox.attr('id', this.id);
                $checkbox.children("h5").text(this.name);

                $("#rec_list_filter_checkboxes").append($checkbox);

                $checkbox.click( () => {
                    this.click();
                })
            });
        });
    }

    click() {
        this.checked = !this.checked;

        this.notifyObservers();
        this.animateToggleCheckBox();
    }

    animateToggleCheckBox() {
        let $checkbox = $("#" + this.id + " .rec_list_filter_checkbox_button");

        if ($checkbox.attr("checked") !== undefined) {
            $checkbox.removeAttr("checked");
        } else {
            $checkbox.attr("checked", true);
        }
    }

    isChecked() { return this.checked; }

    attachObserver(o) {
        this.observers.add(o);
    }

    detachObserver(o) {
        this.observers.remove(o);

    }

    notifyObservers() {
        for (let idx = 0; idx < this.observers.length; idx++) {
            this.observers[idx].notifyOfUpdate();
        }
    }
}

export default Checkbox;