"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RecButton = _interopRequireDefault(require("./RecButton.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ExpandRecButton extends _RecButton.default {
  constructor(recModal) {
    super(recModal);
  } // attaches click handler to save button


  attach() {
    $("#" + this.recId + " .rec_item_button_dropdown i").click(() => {
      this.click();
    });
  } // toggles whether the rec is open


  click() {
    if ($("#" + this.recId).hasClass("rec_item_active")) {
      this.collapse();
    } else {
      this.expand();
    }
  } // expands this rec and collapses others


  expand() {
    //TODO: center scroll on this rec when it expands
    $(".rec_item").removeClass("rec_item_active");
    $("#" + this.recId).addClass("rec_item_active");
  } // collapses the rec


  collapse() {
    $("#" + this.recId).removeClass("rec_item_active");
  }

}

var _default = ExpandRecButton;
exports.default = _default;