"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RecButton = _interopRequireDefault(require("./RecButton.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DiscardEditRecButton extends _RecButton.default {
  constructor(rec) {
    super(rec);
  } // attaches click handler to discard edit button


  attach() {
    $("#" + this.recId + " .discard_edit_button").click(() => {
      this.click();
    });
  }

  click() {
    this.recModal.displayMode();
  }

}

var _default = DiscardEditRecButton;
exports.default = _default;