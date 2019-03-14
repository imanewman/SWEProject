//import User from '../Model/User.js';
//import Rec from '../Model/Rec.js';
const User = require("../Model/User.js");
const Rec = require("../Model/Rec.js");

// 0 = Sunday, 1 = Monday, etc.

class RecGenerator {
    static generateUserRecs(user, recList)
    {
        let pref = user.getPreferredEvents();
        // let times = user.getPreferredTimes();
        let userRecs = [];

        for (let idx = 0; idx < recList.length; idx++) {
            let rec = recList[idx];
            let tags =  rec.getTags();

            // if (checkTimes(rec, times)) {
            for (let tagIdx = 0; tagIdx < tags.length; tagIdx++) {
                if (pref.indexOf(tags[tagIdx] !== -1)) {
                    userRecs.push(rec);
                    continue;
                }
            }
            // }
        }

        return userRecs;
    }

    static checkTimes (rec, times)
    {
        let st = rec.getStartTime();
        let et = rec.getEndTime();
        let dt = new Date(rec.getDate());

        for (let tIdx = 0; tIdx < times.length; tIdx++) {
            let time = times[tIdx];

            // Check this: make sure formatting of fields is correct for comparison
            if ((dt.getDay() in time.day) && (time.start <= rec.getStartTime()) && (time.end >= rec.getEndTime()))
                return true;
        }
        return false;
    }
}

module.exports = RecGenerator;
//export default RecGenerator;
