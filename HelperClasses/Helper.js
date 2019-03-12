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

          //console.log(`all keys: ${Object.keys(expectedRow)}`);

          Object.keys(expectedRow).forEach( (key) => {
              // console.log(`key: ${key}`);
              // console.log(`-> ${JSON.stringify(resultRow[key])}`);
              // console.log(`-> ${JSON.stringify(resultRow[key])}`);
              expect(resultRow[key]).to.equal(expectedRow[key]); // check each value matches
          });
      }
    }

    getRecdata()
    {
      return {
          "RecID": "2",
          "EventName": "Downtown SLO Farmers Market",
          "Description": "Description",
          "Location": "Higuera Street, San Luis Obispo, CA",
          "Date": "2019-02-21",
          "StartTime": "18:00:00",
          "EndTime": "21:00:00",
          "MajorTags": ['Farmers Market'],
          "Draft": false,
          "ContactInfo": "Contact Info",
          "WebsiteLink": "https://downtownslo.com/farmers-market/",
          "ImageLink": "ImageLink stuff",
          //"Rules": "Rules",
          //"UserID": "1"
      };
      /*{
          "id": 2,
          "title": "Junk",
          "description": "Junk",
          "location": "Here",
      }*/
    }

    getUserdata()
    {
      return {
          "UserId": 3,
          "Email": "Junk",
          "FullName": "Name"
      }
    }
}

const Helper = new PrivateHelper();

Object.freeze(Helper);

module.exports = Helper;
