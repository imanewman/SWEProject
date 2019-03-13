import Observable from '../Observable.js';

class Checkbox extends Observable {
    constructor(name) {
        super();

        this.name = name;
        this.id = name.replace(' ', '_') + '_checkbox';
        this.checked = true;

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
        let checkedAttr = $checkbox.attr("checked");

        if (checkedAttr !== undefined) {
            $checkbox.removeAttr("checked");
        } else {
            $checkbox.attr("checked", true);
        }
    }

    isChecked() { return this.checked; }

    getName() { return this.name; }
}

export default Checkbox;