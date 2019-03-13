"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ObjectConverter = _interopRequireDefault(require("./ObjectConverter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PrivateDatabaseUpdater {
  constructor() {
    this.converter = _ObjectConverter.default;

    if (!PrivateDatabaseUpdater.instance) {
      PrivateDatabaseUpdater.instance = this;
    }

    return PrivateDatabaseUpdater.instance;
  }

  putRec(rec) {
    let recObject = this.converter.convertRec(rec);
    this.database.put("Rec", recObject);
  }

  deleteRec(recId) {
    this.database.delete("Rec", recId);
  }

  putUser(user) {
    let userObject = this.converter.convertUser(user);
    this.database.put("User", userObject);
  }

  deleteUser(userId) {
    this.database.delete("User", userId);
  }

  putPendingOrganizer(pendingOrganizerId) {
    this.database.put("PendingOrganizer", pendingOrganizerId);
  }

  deletePendingOrgaizer(userId) {
    this.database.delete("PendingOrganizer", userId);
  }

} // Set up object as a Singleton


const DatabaseUpdater = new PrivateDatabaseUpdater();
Object.freeze(DatabaseUpdater); // module.exports = DatabaseUpdater;

var _default = DatabaseUpdater;
exports.default = _default;