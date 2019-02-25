"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RecButton = _interopRequireDefault(require("./RecButton.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RevertEditRecButton extends _RecButton.default {
  constructor(rec) {
    super(rec);
  } // attaches click handler to revert edit button


  attach() {
    $("#" + this.recId + " .revert_edit_button").click(() => {
      this.click();
    });
  }

  click() {
    this.recModal.updateInfo();
  }

}

var _default = RevertEditRecButton;
exports.default = _default;