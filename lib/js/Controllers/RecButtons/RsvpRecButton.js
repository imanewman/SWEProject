"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RecButton = _interopRequireDefault(require("./RecButton.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RsvpRecButton extends _RecButton.default {
  constructor(rec) {
    super(rec);
  } // attaches click handler to rsvp button


  attach() {
    $("#" + this.recId + " .rsvp_button").click(() => {
      this.click();
    });
  }

  click() {}

}

var _default = RsvpRecButton;
exports.default = _default;