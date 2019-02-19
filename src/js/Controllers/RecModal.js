class RecModal {
    constructor(rec) {
        this.rec = rec;
        this.recId = this.rec.getId();
        this.displaySpeed = 200;

        this.attach();
    }

    // attaches rec to rec list
    attach() {
        $(document).ready( () => {
            $.get("./RecModal.html", (data) => {
                let recElement = $(data);

                // set rec elements id to the same
                recElement.attr('id', this.recId);

                // hide the element
                recElement.hide().promise().then( () => {
                    // add it to the rec list
                    $("#rec_items").append(recElement);

                    // attach controller functions to elements
                    this.attachFunctions();

                    // update the rec info
                    this.updateInfo();

                    // display the rec
                    this.display();
                });
            });
        });
    }

    // attaches functions for controlling each button
    attachFunctions() {
        // expand/collapse when arrow is clicked
        $("#" + this.recId + " .rec_item_button_dropdown i").click( () => {
            this.toggleExpand();
        });

        $("#" + this.recId + " .save_button").click( () => {
            this.toggleSave();
        });

        $("#" + this.recId + " .map_button").click( () => {
            this.locate();
        });

        $("#" + this.recId + " .report_button").click( () => {
            this.report();
        });

        $("#" + this.recId + " .edit_button").click( () => {
            this.edit();
        });

        $("#" + this.recId + " .delete_button").click( () => {
            this.delete();
        });

        $("#" + this.recId + " .hide_button").click( () => {
            this.toggleDraft();
        });
    }

    // updates the rec information currently displayed
    updateInfo() {
        //TODO: load image
        //TODO: make icon change based on event type
        $("#" + this.recId + " .rec_item_title h3").text(this.rec.getTitle());
        //$("#" + this.recId + " .rec_item_time h5").text(this.rec.getDateString());
        $("#" + this.recId + " .rec_item_location h5").text(this.rec.getLocation());
        $("#" + this.recId + " .rec_item_details_description p").text(this.rec.getDescription());
        $("#" + this.recId + " .rec_item_details_rules p").text(this.rec.getRules());
        $.get("./GoogleMapsLocations.html", (data) => {
            let $element = $(data);

            if (this.rec.getLocation()) {
                let srcString = this.rec.getLocation().split(' ').join('%20');

                $element.children('iframe').attr('src', srcString);
            }

            $("#" + this.recId + " .rec_item_map").append($element);

        });
        $("#" + this.recId + " .rec_item_picture img").attr('src',
            'https://myeventmarket.com/wp-content/uploads/2018/06/Funny-Costume.png'
        );
    }

    // displays this rec
    display(callback = () => {}) {
        //TODO: display this rec
        $("#" + this.recId).fadeIn(this.displaySpeed, callback);
    }

    // hides this rec
    hide(callback = () => {}) {
        //TODO: hide this rec, ie: when filtered out during search
        $("#" + this.recId).fadeOut(this.displaySpeed, callback);
    }

    // toggles whether the rec is open
    toggleExpand() {
        if ($("#" + this.recId).hasClass("rec_item_active")) {
            this.collapse();
        } else {
            this.expand();
        }
    }

    // expands this rec and collapses others
    expand() {
        //TODO: center scroll on this rec when it expands
        $(".rec_item").removeClass("rec_item_active");

        $("#" + this.recId).addClass("rec_item_active");
    }

    // collapses the rec
    collapse() {
        $("#" + this.recId).removeClass("rec_item_active")
    }

    // removes this rec from the list
    remove() {
        this.hide();
        //TODO: remove this rec
    }

    // saves this rec to the users watchlist
    toggleSave() {
        //TODO: toggle save on and off, animate toggle between icons
    }

    // opens up new window with location on google maps
    locate() {
        //TODO: open location on map
    }

    // reports this rec
    report() {
        //TODO: create report modal and bring it up with this (a bit more intensive), sets icon to filled
    }

    // shows the buttons for the recs owner
    showOwnerButtons() {
        //TODO: call if the user owns this re to show editing buttons
    }

    // edits this rec
    edit() {
        //TODO: allow in-place editing if the user is the owner
        //TODO: maybe apply state pattern between view/edit mode?
    }

    // saves this rec after editing
    saveEdit() {
        //TODO: add save button in edit mode and implement this
    }

    // aborts an edit
    abortEdit() {
        //TODO: add discard button in edit mode and implement this
    }

    // deletes this rec
    delete() {
        //TODO: deletes this rec after confirming with the user
    }

    // toggles rec between published and hidden
    toggleDraft() {
        //TODO: hides this rec from the public by setting it to draft. changes icon to publish
    }

    // rsvps to rec
    rsvp() {
        //TODO: rsvp to rec, also needs a new modal, will be more intensive
    }
}

export default RecModal;

//TODO: maybe make a defualt button class and make a class for each type with a ref to this RecModal