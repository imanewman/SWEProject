class RecModal {
    constructor(rec) {
        this.rec = rec;
        this.recId = this.rec.getId();

        this.attach();
    }

    // attaches rec to rec list
    attach() {
        $(document).ready( () => {
            $.get("./RecModal.html", (data) => {
                let recElement = $(data);

                // set rec elements id to the same
                recElement.attr('id', this.recId);

                $("#rec_items").append(recElement);
                // recElement.hide();

                // attach controller functions to elements
                this.attachFunctions();

                this.updateInfo();
                this.display();
            });
        });
    }

    // attaches functions for controlling each button
    attachFunctions() {
        $("#" + this.recId + " .rec_item_button_dropdown i").click( () => {
            this.toggleExpand();
        });
    }

    // updates the rec information currently displayed
    updateInfo() {
        //TODO: update info in rec modal based on rec data
        //TODO: make icon change based on event type
    }

    // displays this rec
    display() {
        //TODO: display this rec
    }

    // hides this rec
    hide() {
        //TODO: hide this rec, ie: when filtered out during search
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
        //TODO: toggle save on and off, animate toggle
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
    }

    // deletes this rec
    delete() {
        //TODO: deletes this rec after confirming with the user
    }

    // toggles rec between published and hidden
    toggleHide() {
        //TODO: hides this rec from the public by setting it to draft. changes icon to publish
    }

    // rsvps to rec
    rsvp() {
        //TODO: rsvp to rec, also needs a new modal, will be more intensive
    }
}

export default RecModal;