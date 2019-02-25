"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.regexp.replace");

var _RecButton = _interopRequireDefault(require("./RecButton.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LocateRecButton extends _RecButton.default {
  constructor(rec) {
    super(rec);
  } // attaches click handler to locate button


  attach() {
    $("#" + this.recId + " .map_button").click(() => {
      this.click();
    });
  } // opens up new window with recs location on google maps


  click() {
    let location = this.rec.getLocation();
    let mapsLink = 'https://www.google.com/maps/search/' + location.replace(' ', '+');
    window.open(mapsLink);
  }

}

var _default = LocateRecButton;
exports.default = _default;