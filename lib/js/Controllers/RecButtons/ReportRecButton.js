"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RecButton = _interopRequireDefault(require("./RecButton.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ReportRecButton extends _RecButton.default {
  constructor(rec) {
    super(rec);
  } // attaches click handler to report button


  attach() {
    $("#" + this.recId + " .report_button").click(() => {
      this.click();
    });
  } // reports this rec


  click() {
    //TODO: create report modal and bring it up with this (a bit more intensive)
    let $reportIcon = $("#" + this.recId + " .report_button i");

    _RecButton.default.toggleIconFill($reportIcon);
  }

}

var _default = ReportRecButton;
exports.default = _default;