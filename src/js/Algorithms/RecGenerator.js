import User from '../Model/User.js';
import Rec from '../Model/Rec.js';

// 0 = Sunday, 1 = Monday, etc.

class RecGenerator {
    generateUserRecs(user, recList)
    {
        let pref = user.getPreferredEvents();
        let times = user.getPreferredTimes();
        let userRecs = [];

        for (let idx = 0; idx < recList.length; idx++) {
            let rec = recList[idx];
            let tags =  rec.getTags();

            if (checkTimes(rec, times)) {
                for (let tagIdx = 0; tagIdx < tags.length; tagIdx++) {
                    if (tags[tagIdx] in pref) {
                        userRecs.append(rec);
                        continue;
                    }
                }
            }
        }

        return userRecs;
    }

    checkTimes (rec, times)
    {
        let st = rec.getStartTime();
        let et = rec.getEndTime();
        let dt = rec.getDate();

        for (let tIdx = 0; tIdx < times.length; tIdx++) {
            let time = times[tIdx];
            if ((time.day == dt.getDay()) && (time.start <= rec.getStartTime()) && (time.end >= rec.getEndTime()))
                return true;
        }
        return false;
    }
}