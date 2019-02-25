const expect = require("chai").expect;
const ObjectFactory = require("../src/js/Database/ObjectFactory.js");
const Helper = require("../HelperClasses/Helper.js")


describe("ObjectFactory Tests", () => {
  describe("Test 'initializeRec' function", () => {
    it("Converts the given recObject", (done) => {
      const expected = Helper.getExpectedRec();
      const recived = ObjectFactory.initializeRec(expected);
      expect(recived.id).to.equal(expected.id);
      expect(recived.title).to.equal(expected.title)
      expect(recived.description).to.equal(expected.description)
      expect(recived.location).to.equal(expected.location)
      done();
    });
   });

  describe("Test 'initializeRec' function", () => {
    it("Converts the given userObject", (done) => {
      const expected = Helper.getExpectedUser();
      const recived = ObjectFactory.initializeUser(expected);
      expect(recived.id).to.equal(expected.id);
      expect(recived.email).to.equal(expected.email);
      expect(recived.fullName).to.equal(expected.fullName);
      done();
    })
  });
 });
