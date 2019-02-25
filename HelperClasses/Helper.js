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

    getExpectedRec()
    {
      return{
          "id": 2,
          "title": "Junk",
          "description": "Junk",
          "location": "Here",
      }
    }

    getExpectedUser()
    {
      return {
          "id": 3,
          "email": "Junk",
          "fullName": "Name"
      }
    }
}

const Helper = new PrivateHelper();

Object.freeze(Helper);

module.exports = Helper;