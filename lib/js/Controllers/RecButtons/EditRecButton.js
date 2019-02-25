"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RecButton = _interopRequireDefault(require("./RecButton.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EditRecButton extends _RecButton.default {
  constructor(rec) {
    super(rec);
  } // attaches click handler to edit button


  attach() {
    $("#" + this.recId + " .edit_button").click(() => {
      this.click();
    });
  } // toggles editing this rec


  click() {
    this.recModal.editMode();
  }

}

var _default = EditRecButton;
exports.default = _default;