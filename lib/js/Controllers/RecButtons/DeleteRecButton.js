"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RecButton = _interopRequireDefault(require("./RecButton.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DeleteRecButton extends _RecButton.default {
  constructor(rec) {
    super(rec);
  } // attaches click handler to delete button


  attach() {
    $("#" + this.recId + " .delete_button").click(() => {
      this.click();
    });
  }

  click() {}

}

var _default = DeleteRecButton;
exports.default = _default;