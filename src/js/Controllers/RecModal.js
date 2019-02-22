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

        this.editableElementSelectors = [
            '.rec_item_title h3',
            '.rec_item_time h5',
            '.rec_item_location h5',
            '.rec_item_details_description p',
            '.rec_item_details_rules p',
            '.rec_item_details_contact p',
            '.rec_item_details_website a'
        ];

        this.selectors = {
            'title': "#" + this.recId + " .rec_item_title h3",
            'date': "#" + this.recId + " .rec_item_time h5",
            'location': "#" + this.recId + " .rec_item_location h5",
            'description': "#" + this.recId + " .rec_item_details_description p",
            'rules': "#" + this.recId + " .rec_item_details_rules p",
            'contactInfo': "#" + this.recId + " .rec_item_details_contact p",
            'websiteLink': "#" + this.recId + " .rec_item_details_website a"
        };

        this.maxLengths = {
            'title': 50,
            'date': 60,
            'location': 50,
            'description': 500,
            'rules': 500,
            'contactInfo': 500,
            'websiteLink': 150
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
                    this.attachButtons();

                    // regulate how fields can be edited
                    this.regulateEditableFields();

                    // update the rec info
                    this.updateInfo();

                    // display the rec
                    this.display();

                    //TODO: put user id in local storage
                    if (localStorage.getItem("userId") === this.rec.getOwnerId()) {
                        this.showOtherButtons("owner");
                    }
                });
            });
        });
    }

    // adds all buttons, which attaches click handlers
    attachButtons() {
        this.expandButton = new ExpandRecButton(this);
        this.saveButton = new SaveRecButton(this);
        this.locateButton = new LocateRecButton(this);
        this.reportButton = new ReportRecButton(this);
        this.editButton = new EditRecButton(this);
        this.deleteButton = new DeleteRecButton(this);
        this.hideButton = new HideRecButton(this);
        this.rsvpButton = new RsvpRecButton(this);
        this.saveEditButton = new SaveEditRecButton(this);
        this.discardEditButton = new DiscardEditRecButton(this);
        this.revertEditButton = new RevertEditRecButton(this);
    }

    // makes it so certain things arent allowed in editable fields
    regulateEditableFields() {
        for (let key in this.selectors) {
            if (this.selectors.hasOwnProperty(key)) {
                let selector = this.selectors[key];
                let maxChars = this.maxLengths[key];

                $(selector)
                    .keypress((e) => {
                        return e.which !== 13;
                    }) //removes any new lines
                    .keydown((e) => {
                        this.regulateCharCount(selector, maxChars, e);
                    });
            }
        }
    }

    // ensures text field isnt too long
    regulateCharCount(selector, maxChars, e) {
        if(e.which !== 8 && $(selector).text().length > maxChars)
        {
            e.preventDefault();
        }
    }

    // saves updated rec info
    saveInfo() {
        let title = $(this.selectors['title']).text();
        this.rec.setTitle(title);

        let date = $(this.selectors['date']).text();
        //TODO: set date and time based on this string, make a method in Rec

        let location = $(this.selectors['location']).text();
        this.rec.setLocation(location);

        let description = $(this.selectors['description']).text();
        this.rec.setDescription(description);

        let rules = $(this.selectors['rules']).text();
        this.rec.setRules(rules);

        let contactInfo = $(this.selectors['contactInfo']).text();
        this.rec.setContactInfo(contactInfo);

        let websiteLink = $(this.selectors['websiteLink']).text();
        this.rec.setWebsiteLink(websiteLink);

        this.updateMap();
        this.updateImage();
        this.updateIcon();
    }

    // updates the rec information currently displayed
    updateInfo() {
        $(this.selectors['title']).text(this.rec.getTitle());

        $(this.selectors['date']).text(this.rec.getDateString());

        $(this.selectors['location']).text(this.rec.getLocation());

        $(this.selectors['description']).text(this.rec.getDescription());

        $(this.selectors['rules']).text(this.rec.getRules());

        $(this.selectors['contactInfo']).text(this.rec.getContactInfo());

        $(this.selectors['websiteLink'])
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

    // set mode to editing and show edit buttons
    editMode() {
        this.editing = true;

        $("#" + this.recId).addClass("rec_item_editable");

        for (let idx = 0; idx < this.editableElementSelectors.length; idx++) {
            $("#" + this.recId + ' ' + this.editableElementSelectors[idx])
                .attr('contenteditable', 'true');
        }

        this.showOtherButtons("editing");
    }

    // set mode back to non-editing, and show owner buttons
    displayMode() {
        this.editing = false;

        $("#" + this.recId).removeClass("rec_item_editable");

        for (let idx = 0; idx < this.editableElementSelectors.length; idx++) {
            $("#" + this.recId + ' ' + this.editableElementSelectors[idx])
                .attr('contenteditable', 'false');
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

let testOwner = true;

if (testOwner) {
    localStorage.setItem("userId", "1000000");
}

export default RecModal;

//TODO: maybe make a default button class and make a class for each type with a ref to this RecModal