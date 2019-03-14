const expect = require("chai").expect;
class PrivateHelper {
    constructor() {
        if(! PrivateHelper.instance){
            PrivateHelper.instance = this;
        }

        return PrivateHelper.instance;
    }

    IterateFields(result, expected){
      expect(result.length).to.equal(expected.length); // check that result is one row

      for (var idx = 0; idx < result.length; idx++) {
          let resultRow = result[idx];
          let expectedRow = expected[idx];

          Object.keys(expectedRow).forEach( (key) => {
              expect(resultRow[key]).to.equal(expectedRow[key]); // check each value matches
          });
      }
    }

    getRecdata()
    {
      return {
          "RecID": 2,
          "EventName": "Downtown SLO Farmers Market",
          "Description": "Description",
          "Location": "Higuera Street, San Luis Obispo, CA",
          "Date": "2019-02-21",
          "StartTime": "18:00:00",
          "EndTime": "21:00:00",
          "MajorTag": ['Farmers Market'],
          "Draft": false,
          "ContactInfo": "Contact Info",
          "WebsiteLink": "https://downtownslo.com/farmers-market/",
          "ImgLink": "ImageLink stuff",
          "Rules": "Rules",
          "UserID": 1
      };
    }

    getUserdata()
    {
      return {
          "id": 3,
          "email": "Junk",
          "fullName": "Name",
          "passwordHash": "password1",
          "preferredEvents": ['Event1', 'Event2']
      }
    }
}

const Helper = new PrivateHelper();

Object.freeze(Helper);

module.exports = Helper;
