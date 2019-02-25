"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RecButton = _interopRequireDefault(require("./RecButton.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SaveEditRecButton extends _RecButton.default {
  constructor(rec) {
    super(rec);
  } // attaches click handler to save edit button


  attach() {
    $("#" + this.recId + " .save_edit_button").click(() => {
      this.click();
    });
  }

  click() {
    this.recModal.displayMode();
  }

}

var _default = SaveEditRecButton;
exports.default = _default;