import SaveRecButton from './RecButtons/SaveRecButton.js';
import LocateRecButton from './RecButtons/LocateRecButton.js';
import ReportRecButton from './RecButtons/ReportRecButton.js';
import ExpandRecButton from './RecButtons/ExpandRecButton.js';
import EditRecButton from './RecButtons/EditRecButton.js';
import DeleteRecButton from './RecButtons/DeleteRecButton.js';
import HideRecButton from './RecButtons/HideRecButton.js';
import RsvpRecButton from './RecButtons/RsvpRecButton.js';
import SaveEditRecButton from './RecButtons/SaveEditRecButton.js';
import DiscardEditRecButton from './RecButtons/DiscardEditRecButton.js';
import RevertEditRecButton from './RecButtons/RevertEditRecButton.js';
import RecTextFactory from './EditableRecText/RecTextFactory.js';
import DatabaseUpdater from '../Database/DatabaseUpdater.js';
import Categories from './Categories.js';

class RecModal {
    constructor(rec, newRec = false) {
        this.rec = rec;
        this.recId = this.rec.getId();
        this.displaySpeed = 200;
        this.editing = false;
        this.buttons = {};
        this.editableTexts = {};
        this.newRec = newRec;

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
                    if (this.newRec) {
                        $("#rec_items").prepend(recElement);
                    } else {
                        $("#rec_items").append(recElement);
                    }

                    // attach controller functions to buttons
                    this.attachEventHandlers();

                    // update the rec info
                    this.updateInfo();

                    if (localStorage.getItem("userId") == this.rec.getOwnerId()) {
                        this.showOtherButtons("owner");
                    }

                    // display the rec
                    this.display();

                    if (this.newRec) {
                        this.expand();
                        this.editMode();
                    }
                });
            });
        });
    }

    // adds all buttons, which attaches click handlers
    attachEventHandlers() {
        this.buttons['expand'] = new ExpandRecButton(this);
        this.buttons['save'] = new SaveRecButton(this);
        this.buttons['locate'] = new LocateRecButton(this);
        this.buttons['report'] = new ReportRecButton(this);
        this.buttons['edit'] = new EditRecButton(this);
        this.buttons['delete'] = new DeleteRecButton(this);
        this.buttons['hide'] = new HideRecButton(this);
        this.buttons['rsvp'] = new RsvpRecButton(this);
        this.buttons['saveEdit'] = new SaveEditRecButton(this);
        this.buttons['discardEdit'] = new DiscardEditRecButton(this);
        this.buttons['revertEdit'] = new RevertEditRecButton(this);

        this.editableTexts = RecTextFactory.createAllEditableText(this);
    }

    getRecId() { return this.recId; }

    // saves updated rec info
    saveInfo() {
        for (let key in this.editableTexts) {
            if (this.editableTexts.hasOwnProperty(key)) {
                this.editableTexts[key].save();
            }
        }

        this.updateMap();
        this.updateImage();
        this.updateIcon();

        console.log(`PUT ${this.recId}`);
        // DatabaseUpdater.putRec(this.rec);
    }

    // updates the rec information currently displayed
    updateInfo() {
        for (let key in this.editableTexts) {
            if (this.editableTexts.hasOwnProperty(key)) {
                this.editableTexts[key].update();
            }
        }

        this.updateMap();
        this.updateImage();
        this.updateIcon();
    }

    expand() {
        this.buttons['expand'].click();
    }

    // updates the rec icon based on its tags
    updateIcon() {
        let tag = this.rec.getTags();

        if (Categories.icons.hasOwnProperty(tag)) {
            let tagClasses = Categories.icons[tag]; // for now it just picks the first tag

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

    getRec() { return this.rec; }

    getRecId() { return this.recId; }

    // displays this rec
    display(callback = () => {}) {
        //TODO: display this rec, animate
        $("#" + this.recId).fadeIn(this.displaySpeed, callback);
    }

    // hides this rec
    hide(callback = () => {}) {
        //TODO: hide this rec, aniamte, ie: when filtered out during search
        $("#" + this.recId).fadeOut(this.displaySpeed, callback);
    }

    // removes this rec from the list
    remove() {
        let removeRec = () => {
            $("#" + this.recId).remove();
        };

        this.hide(removeRec);
    }

    // set mode to editing and show edit buttons
    editMode() {
        this.editing = true;

        $("#" + this.recId).addClass("rec_item_editable");

        $("#" + this.recId + " .rec_item_rsvp").fadeOut(this.displaySpeed);

        for (let key in this.editableTexts) {
            if (this.editableTexts.hasOwnProperty(key)) {
                this.editableTexts[key].editMode();
            }
        }

        this.showOtherButtons("editing");
    }

    // set mode back to non-editing, and show owner buttons
    displayMode() {
        this.editing = false;

        $("#" + this.recId).removeClass("rec_item_editable");

        $("#" + this.recId + " .rec_item_rsvp").fadeIn(this.displaySpeed);

        for (let key in this.editableTexts) {
            if (this.editableTexts.hasOwnProperty(key)) {
                this.editableTexts[key].displayMode();
            }
        }

        this.showOtherButtons("owner");
    }

    // shows the buttons for the recs owner
    showOtherButtons(type = "owner") {
        //TODO: call if the user owns this rec to show editing buttons
        //TODO: be able to switch between public, owner, edit buttons with this
        $("#" + this.recId + " .rec_item_buttons_type").removeClass("rec_item_buttons_type_active");
        $("#" + this.recId + " .rec_item_buttons_" + type).addClass("rec_item_buttons_type_active");
    }
}

export default RecModal;