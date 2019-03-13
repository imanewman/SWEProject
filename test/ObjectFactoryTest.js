const expect = require("chai").expect;
const ObjectFactory = require("../src/js/Database/ObjectFactory.js");
const Helper = require("../HelperClasses/Helper.js")


describe("ObjectFactory Tests", () => {
  describe("Test 'initializeRec' function", () => {
    it("Converts the given recObject", (done) => {
      const expected = Helper.getRecdata();
      const recived = ObjectFactory.initializeRec(expected);
      expect(recived.draft).to.equal(expected.Draft);
      expect(recived.EventName).to.equal(expected.EventName)
      expect(recived.Description).to.equal(expected.Description)
      expect(recived.Location).to.equal(expected.Location)
      done();
    });
   });

  describe("Test 'initializeRec' function", () => {
    it("Converts the given userObject", (done) => {
      const expected = Helper.getUserdata();
      const recived = ObjectFactory.initializeUser(expected);
      expect(recived.id).to.equal(expected.id);
      expect(recived.email).to.equal(expected.email);
      expect(recived.fullName).to.equal(expected.fullName);
      done();
    })
  });
 });
