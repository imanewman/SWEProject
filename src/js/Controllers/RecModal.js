import SaveRecButton from './RecButtons/SaveRecButton.js';
import LocateRecButton from './RecButtons/LocateRecButton.js';
import ReportRecButton from './RecButtons/ReportRecButton.js';
import ExpandRecButton from './RecButtons/ExpandRecButton.js';
import EditRecButton from './RecButtons/EditRecButton.js';
import DeleteRecButton from './RecButtons/DeleteRecButton.js';
import HideRecButton from './RecButtons/HideRecButton.js';
import RsvpRecButton from './RecButtons/RsvpRecButton.js';

//TODO: add owner info, tags
class RecModal {
    constructor(rec) {
        this.rec = rec;
        this.recId = this.rec.getId();
        this.displaySpeed = 200;
        this.editing = false;

        this.tagIconMap = {
            'Farmers Market': 'fas fa-carrot orange',
            'Hiking': 'fas fa-hiking neongreen',
            'Festival': 'fas fa-guitar gold',
            'Food': 'fas fa-utensils limegreen',
            'Open Mic': 'fas fa-microphone purple',
            'Career Fair': 'fas fa-user-tie deepblue',
            'Trade Show': 'fas fa-store red',
            'Sports': 'fas fa-futbol bloodorange',
            'Charity': 'fas fa-hand-holding-heart pink',
            'Convention': 'fas fa-users rose',
            'Speech': 'fas fa-comments green'
        };

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

                    // attach controller functions to buttons
                    this.attachFunctions();

                    // update the rec info
                    this.updateInfo();

                    // display the rec
                    this.display();

                    //TODO: put user id in local storage
                    if (localStorage.getItem("userId") == this.rec.getOwnerId()) {
                        this.showOwnerButtons();
                    }
                });
            });
        });
    }

    // adds all buttons, which attaches click handlers
    attachFunctions() {
        this.expandButton = new ExpandRecButton(this);
        this.saveButton = new SaveRecButton(this);
        this.locateButton = new LocateRecButton(this);
        this.reportButton = new ReportRecButton(this);
        this.editButton = new EditRecButton(this);
        this.deleteButton = new DeleteRecButton(this);
        this.hideButton = new HideRecButton(this);
        this.rsvpButton = new RsvpRecButton(this);
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

    // returns the associated rec
    getRec() { return this.rec; }

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

    // shows the buttons for the recs owner
    showOwnerButtons() {
        //TODO: call if the user owns this rec to show editing buttons
        //TODO: be able to switch between public, owner, edit buttons with this
        $("#" + this.recId + " .rec_item_buttons_public").hide();
        $("#" + this.recId + " .rec_item_buttons_owner").css('display', 'flex');
    }
}

let testOwner = true;

if (testOwner) {
    localStorage.setItem("userId", "1000000");
}

export default RecModal;

//TODO: maybe make a default button class and make a class for each type with a ref to this RecModal