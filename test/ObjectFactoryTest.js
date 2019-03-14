const expect = require("chai").expect;
const ObjectFactory = require("../src/js/Database/ObjectFactory.js");
const Helper = require("../HelperClasses/Helper.js")


describe("ObjectFactory Tests", () => {
  describe("Test 'initializeRec' function", () => {
    it("Converts the given recObject", (done) => {
      const expected = Helper.getRecdata();
      const recived = ObjectFactory.initializeRec(expected);

      Helper.checkRecFields(recived, expected);

      done();
    });
   });

  describe("Test 'initializeRec' function", () => {
    it("Converts the given userObject", (done) => {
      const expected = Helper.getUserdata();
      const recived = ObjectFactory.initializeUser(expected);

      Helper.checkUserFields(recived, expected);

      done();
    })
  });
 });
