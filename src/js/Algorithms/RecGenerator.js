import User from '../Model/User.js';
import Rec from '../Model/Rec.js';

class RecGenerator {
    generateUserRecs(user, recList)
    {
        let pref = user.getPreferredEvents();
        let userRecs = [];

        for (let idx = 0; idx < recList.length; idx++) {
            let rec = recList[idx];
            let tags =  rec.getTags();

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