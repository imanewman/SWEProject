"use strict";

var _User = _interopRequireDefault(require("../Model/User.js"));

var _Rec = _interopRequireDefault(require("../Model/Rec.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RecGenerator {
  generateUserRecs(user, recList) {
    let pref = user.getPreferredEvents();
    let userRecs = [];

    for (let idx = 0; idx < recList.length; idx++) {
      let rec = recList[idx];
      let tags = rec.getTags();

      for (let tagIdx = 0; tagIdx < tags.length; tagIdx++) {
        if (tags[tagIdx] in pref) {
          userRecs.append(rec);
          continue;
        }
      }
    }

    return userRecs;
  }

}