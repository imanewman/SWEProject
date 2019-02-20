//TODO: add owner info
class RecModal {
    constructor(rec) {
        this.rec = rec;
        this.recId = this.rec.getId();
        this.displaySpeed = 200;
        this.editing = false;

        this.tagIconMap = {
            'Farmers Market': 'fas fa-carrot',
            'Hiking': 'fas fa-hiking',
            'Festival': 'fas fa-guitar',
            'Food': 'fas fa-utensils',
            'Open Mic': 'fas fa-microphone',
            'Career Fair': 'fas fa-user-tie',
            'Trade Show': 'fas fa-store',
            'Sports': 'fas fa-futbol',
            'Charity': 'fas fa-hand-holding-heart',
            'Convention': 'fas fa-users',
            'Speech': 'fas fa-comments'
        };

        this.editableElementSelectors = [
            '.rec_item_title h3',
            '.rec_item_time h5',
            '.rec_item_location h5',
            '.rec_item_details_description p',
            '.rec_item_details_rules p',
            '.rec_item_details_contact p',
            '.rec_item_details_website a'
        ];

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

                    //TODO: put user id in local storage
                    if (testOwner || localStorage.getItem("userId")) {
                        this.showOwnerButtons();
                    }
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
            this.toggleEdit();
        });

        $("#" + this.recId + " .delete_button").click( () => {
            this.delete();
        });

        $("#" + this.recId + " .hide_button").click( () => {
            this.toggleDraft();
        });

        $("#" + this.recId + " .rec_item_rsvp").click( () => {
            this.rsvp();
        });
    }

    // updates the rec information currently displayed
    updateInfo() {
        //TODO: make icon change based on event type

        $("#" + this.recId + " .rec_item_title h3").text(this.rec.getTitle());

        $("#" + this.recId + " .rec_item_time h5").text(this.rec.getDateString());

        $("#" + this.recId + " .rec_item_location h5").text(this.rec.getLocation());

        $("#" + this.recId + " .rec_item_details_description p").text(this.rec.getDescription());

        $("#" + this.recId + " .rec_item_details_rules p").text(this.rec.getRules());

        $("#" + this.recId + " .rec_item_details_contact p").text(this.rec.getContactInfo());

        $("#" + this.recId + " .rec_item_details_website a")
            .text(this.rec.getWebsiteLink())
            .attr('href', this.rec.getWebsiteLink());

        this.updateMap();
        this.updateImage();
        this.updateIcon();
    }

    // updates the rec icon based on its tags
    updateIcon() {
        let tags = this.rec.getTags();

        if (tags.length > 0 && tags[0] in this.tagIconMap) {
            let tagClasses = this.tagIconMap[tags[0]]; // for now it just picks the first tag

            $("#" + this.recId + " .rec_item_image i").removeClass().addClass(tagClasses);
        }
    }

    // updates the rec image and crops it based on teh longer edge
    updateImage() {
        let $image = $("#" + this.recId + " .rec_item_picture img");

        let fillClass = ($image.height() > $image.width())
            ? 'fillheight'
            : 'fillwidth';

        $image.attr('src',this.rec.getImageLink());
        $image.removeClass("fillheight fillwidth").addClass(fillClass);
    }

    // updates the map based on the recs location
    updateMap() {
        let location = this.rec.getLocation();

        if (location !== '') {
            let srcString = 'https://maps.google.com/maps?q='
                + this.rec.getLocation().replace('%20')
                + '&t=&z=13&ie=UTF8&iwloc=&output=embed';

            $("#" + this.recId + " .rec_item_map iframe").attr('src', srcString);
        } else {
            $("#" + this.recId + " .rec_item_map").css('visibility', 'hidden');
        }
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
        let removeRec = () => {
            $("#" + this.recId).remove();
        };

        this.hide(removeRec);
    }

    // saves this rec to the users watchlist
    toggleSave() {
        //TODO: toggle save on and off
        let $saveIcon = $("#" + this.recId + " .save_button i");

        this.toggleIconFill($saveIcon);
    }

    // opens up new window with location on google maps
    locate() {
        let location = this.rec.getLocation();
        let mapsLink = 'https://www.google.com/maps/search/' + location.replace(' ', '+');

        window.open(mapsLink);
    }

    // reports this rec
    report() {
        //TODO: create report modal and bring it up with this (a bit more intensive)
        let $reportIcon = $("#" + this.recId + " .report_button i");

        this.toggleIconFill($reportIcon);
    }

    // shows the buttons for the recs owner
    showOwnerButtons() {
        //TODO: call if the user owns this rec to show editing buttons
        $("#" + this.recId + " .rec_item_buttons_public").hide();
        $("#" + this.recId + " .rec_item_buttons_owner").css('display', 'flex');
    }

    // toggles editing this rec
    toggleEdit() {
        //TODO: maybe apply state pattern between view/edit mode?
        if (this.editing) {
            this.viewMode();
        } else {
            this.editMode();
        }
    }

    // sets the rec to edit mode
    editMode() {
        $("#" + this.recId).addClass("rec_item_editable");

        for (let idx = 0; idx < this.editableElementSelectors.length; idx++) {
            $("#" + this.recId + ' ' + this.editableElementSelectors[idx])
                .attr('contenteditable', 'true');
        }

        this.editing = true;
    }

    //sets the rec to view mode
    viewMode() {
        $("#" + this.recId).removeClass("rec_item_editable");

        for (let idx = 0; idx < this.editableElementSelectors.length; idx++) {
            $("#" + this.recId + ' ' + this.editableElementSelectors[idx])
                .attr('contenteditable', 'false');
        }

        this.editing = false;
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
        //TODO: hides this rec from the public by setting it to draft
    }

    // rsvps to rec
    rsvp() {
        //TODO: rsvp to rec, also needs a new modal, will be more intensive
    }

    // toggles whether an FA icon is filled in
    toggleIconFill($icon) {
        if ($icon.hasClass("fas")) {
            $icon.removeClass("fas").addClass("far");
        } else {
            $icon.removeClass("far").addClass("fas");
        }
    }
}

let testOwner = true;

export default RecModal;

//TODO: maybe make a default button class and make a class for each type with a ref to this RecModal