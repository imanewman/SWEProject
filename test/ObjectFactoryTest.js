const expect = require("chai").expect;
const DatabaseConnector = require("../src/Database/ObjectFactory.js");

describe("ObjectFactory Tests", () => {
  describe("Test 'initializeRec' function", () => {
    it("Converts the given recObject", (done) => {
      const expected = [ {
        Id: ""
      } ];

      const checkEquals = (result) => {
          expect(result.New_Rec).to.equal(expected.New_Rec);

          done();
      };

      ObjectFactory.initializeRec();
    });
   });
 });
