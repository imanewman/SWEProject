"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RecButton = _interopRequireDefault(require("./RecButton.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SaveRecButton extends _RecButton.default {
  constructor(recModal) {
    super(recModal);
  } // attaches click handler to save button


  attach() {
    $("#" + this.recId + " .save_button").click(() => {
      this.click();
    });
  } // saves this rec to the users watchlist


  click() {
    //TODO: toggle save on and off
    let $saveIcon = $("#" + this.recId + " .save_button i");

    _RecButton.default.toggleIconFill($saveIcon);
  }

}

var _default = SaveRecButton;
exports.default = _default;