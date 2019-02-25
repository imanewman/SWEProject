"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Navbar = _interopRequireDefault(require("./Navbar.js"));

var _RecListModal = require("./RecListModal.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MainController {
  constructor() {
    this.navbar = new _Navbar.default(this);
    this.scene = null;

    if (!MainController.instance) {
      MainController.instance = this;
    }

    return MainController.instance;
  } // changes page based on which nav button is clicked on


  changePage($element) {
    // console.log("change page: ");
    // console.log($element);
    let elementName = $element.text().trim();
    let newScene = nameToSceneMap[elementName];

    let addNewScene = () => {
      if (newScene) this.scene = newScene();
    };

    if (this.scene) {
      this.scene.remove(addNewScene);
    } else {
      addNewScene();
    } //TODO: if converting from one rec list to another, dont need to make a new one

  }

}

const Main = new MainController();
const nameToSceneMap = {
  'home': () => {
    return null;
  },
  'my recs': () => {
    return new _RecListModal.RecListModal('My Recs', _RecListModal.REC_IMPORTS.RECOMMENDED);
  },
  'all recs': () => {
    return new _RecListModal.RecListModal('All Recs', _RecListModal.REC_IMPORTS.ALL);
  },
  'watchlist': () => {
    return new _RecListModal.RecListModal('Rec Watchlist', _RecListModal.REC_IMPORTS.WATCHLIST);
  },
  'my posts': () => {
    return new _RecListModal.RecListModal('My Posts', _RecListModal.REC_IMPORTS.OWNED);
  }
};
var _default = Main;
exports.default = _default;