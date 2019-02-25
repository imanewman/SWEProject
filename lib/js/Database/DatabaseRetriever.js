"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ObjectFactory = _interopRequireDefault(require("./ObjectFactory.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PrivateDatabaseRetriever {
  constructor() {
    this.factory = _ObjectFactory.default;

    if (!PrivateDatabaseRetriever.instance) {
      PrivateDatabaseRetriever.instance = this;
    }

    return PrivateDatabaseRetriever.instance;
  }

  getRec(recId) {
    let recObject = {};
    $.ajax({
      url: `Recs/${recId}`,
      type: 'GET',
      async: false,
      success: result => {
        recObject = result;
      }
    });
    let rec = this.factory.initializeRec(recObject);
    return rec;
  }

  getRecs() {
    let recList = [];
    $.ajax({
      url: `Recs`,
      type: 'GET',
      async: false,
      success: result => {
        recList = result;
      }
    });
    let recs = this.factory.initializeRecList(recList);
    return recs;
  }

  getUser(userId) {
    let userObject = {};
    $.ajax({
      url: `Users/${userId}`,
      type: 'GET',
      async: false,
      success: result => {
        userObject = result;
      }
    });
    let user = this.factory.initializeUser(userObject);
    return user;
  }

  getPendingOrgaizers() {
    let pendingOrganizersObject = {};
    $.ajax({
      url: `PendingOrganizers`,
      type: 'GET',
      async: false,
      success: result => {
        pendingOrganizersObject = result;
      }
    });
    let pendingOrganizers = this.factory.initializePendingOrganizerList(pendingOrganizersObject);
    return pendingOrganizers;
  }

  getTags(recId) {
    let tagList = [];
    $.ajax({
      url: `Tags/${recId}`,
      type: 'GET',
      async: false,
      success: result => {
        tagList = result;
      }
    });
    return tagList;
  }

} // Set up object as a Singleton


const DatabaseRetriever = new PrivateDatabaseRetriever();
Object.freeze(DatabaseRetriever); // module.exports = DatabaseRetriever;

var _default = DatabaseRetriever;
exports.default = _default;