"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.regexp.replace");

var _SaveRecButton = _interopRequireDefault(require("./RecButtons/SaveRecButton.js"));

var _LocateRecButton = _interopRequireDefault(require("./RecButtons/LocateRecButton.js"));

var _ReportRecButton = _interopRequireDefault(require("./RecButtons/ReportRecButton.js"));

var _ExpandRecButton = _interopRequireDefault(require("./RecButtons/ExpandRecButton.js"));

var _EditRecButton = _interopRequireDefault(require("./RecButtons/EditRecButton.js"));

var _DeleteRecButton = _interopRequireDefault(require("./RecButtons/DeleteRecButton.js"));

var _HideRecButton = _interopRequireDefault(require("./RecButtons/HideRecButton.js"));

var _RsvpRecButton = _interopRequireDefault(require("./RecButtons/RsvpRecButton.js"));

var _SaveEditRecButton = _interopRequireDefault(require("./RecButtons/SaveEditRecButton.js"));

var _DiscardEditRecButton = _interopRequireDefault(require("./RecButtons/DiscardEditRecButton.js"));

var _RevertEditRecButton = _interopRequireDefault(require("./RecButtons/RevertEditRecButton.js"));

var _RecTextFactory = _interopRequireDefault(require("./EditableRecText/RecTextFactory.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: add owner info, tags
class RecModal {
  constructor(rec) {
    this.rec = rec;
    this.recId = this.rec.getId();
    this.displaySpeed = 200;
    this.editing = false;
    this.buttons = {};
    this.editableTexts = {};
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
  } // attaches rec to rec list


  attach() {
    $(document).ready(() => {
      $.get("./RecModal.html", data => {
        let recElement = $(data); // set rec elements id to the same

        recElement.attr('id', this.recId); // hide the element

        recElement.hide().promise().then(() => {
          // add it to the rec list
          $("#rec_items").append(recElement); // attach controller functions to buttons

          this.attachButtons();
          this.editableTexts = _RecTextFactory.default.createAllEditableText(this); // update the rec info

          this.updateInfo(); // display the rec

          this.display(); //TODO: put user id in local storage

          if (localStorage.getItem("userId") === this.rec.getOwnerId()) {
            this.showOtherButtons("owner");
          }
        });
      });
    });
  } // adds all buttons, which attaches click handlers


  attachButtons() {
    this.buttons['expand'] = new _ExpandRecButton.default(this);
    this.buttons['save'] = new _SaveRecButton.default(this);
    this.buttons['locate'] = new _LocateRecButton.default(this);
    this.buttons['report'] = new _ReportRecButton.default(this);
    this.buttons['edit'] = new _EditRecButton.default(this);
    this.buttons['delete'] = new _DeleteRecButton.default(this);
    this.buttons['hide'] = new _HideRecButton.default(this);
    this.buttons['rsvp'] = new _RsvpRecButton.default(this);
    this.buttons['saveEdit'] = new _SaveEditRecButton.default(this);
    this.buttons['discardEdit'] = new _DiscardEditRecButton.default(this);
    this.buttons['revertEdit'] = new _RevertEditRecButton.default(this);
  } // saves updated rec info


  saveInfo() {
    for (let key in this.editableTexts) {
      if (this.editableTexts.hasOwnProperty(key)) {
        this.editableTexts[key].save();
      }
    }

    this.updateMap();
    this.updateImage();
    this.updateIcon();
  } // updates the rec information currently displayed


  updateInfo() {
    for (let key in this.editableTexts) {
      if (this.editableTexts.hasOwnProperty(key)) {
        this.editableTexts[key].update();
      }
    }

    this.updateMap();
    this.updateImage();
    this.updateIcon();
  } // updates the rec icon based on its tags


  updateIcon() {
    let tags = this.rec.getTags();

    if (tags.length > 0 && tags[0] in this.tagIconMap) {
      let tagClasses = this.tagIconMap[tags[0]]; // for now it just picks the first tag

      $("#" + this.recId + " .rec_item_image i").removeClass().addClass(tagClasses);
    }
  } // updates the rec image and crops it based on teh longer edge


  updateImage() {
    let $image = $("#" + this.recId + " .rec_item_picture img");
    let fillClass = $image.height() > $image.width() ? 'fillheight' : 'fillwidth';
    $image.attr('src', this.rec.getImageLink());
    $image.removeClass("fillheight fillwidth").addClass(fillClass);
  } // updates the map based on the recs location


  updateMap() {
    let location = this.rec.getLocation();

    if (location !== '') {
      let srcString = 'https://maps.google.com/maps?q=' + this.rec.getLocation().replace('%20') + '&t=&z=13&ie=UTF8&iwloc=&output=embed';
      $("#" + this.recId + " .rec_item_map iframe").attr('src', srcString);
    } else {
      $("#" + this.recId + " .rec_item_map").css('visibility', 'hidden');
    }
  }

  getRec() {
    return this.rec;
  }

  getRecId() {
    return this.recId;
  } // displays this rec


  display() {
    let callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
    //TODO: display this rec, animate
    $("#" + this.recId).fadeIn(this.displaySpeed, callback);
  } // hides this rec


  hide() {
    let callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
    //TODO: hide this rec, aniamte, ie: when filtered out during search
    $("#" + this.recId).fadeOut(this.displaySpeed, callback);
  } // removes this rec from the list


  remove() {
    let removeRec = () => {
      $("#" + this.recId).remove();
    };

    this.hide(removeRec);
  } // set mode to editing and show edit buttons


  editMode() {
    this.editing = true;
    $("#" + this.recId).addClass("rec_item_editable");

    for (let key in this.editableTexts) {
      if (this.editableTexts.hasOwnProperty(key)) {
        this.editableTexts[key].editMode();
      }
    }

    this.showOtherButtons("editing");
  } // set mode back to non-editing, and show owner buttons


  displayMode() {
    this.editing = false;
    $("#" + this.recId).removeClass("rec_item_editable");

    for (let key in this.editableTexts) {
      if (this.editableTexts.hasOwnProperty(key)) {
        this.editableTexts[key].displayMode();
      }
    }

    this.showOtherButtons("owner");
  } // shows the buttons for the recs owner


  showOtherButtons() {
    let type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "owner";
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

var _default = RecModal;
exports.default = _default;