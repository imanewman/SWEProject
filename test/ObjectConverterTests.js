const expect = require("chai").expect;
const ObjectConverter = require("../src/js/Database/ObjectConverter.js");
const ObjectFactory = require("../src/js/Database/ObjectFactory.js");
const Helper = require("../HelperClasses/Helper.js");


describe("ObjectConverter Tests", () => {
  describe("Test 'convertRec' function", () => {
    it("Converts the given Rec", (done) => {
      const data = Helper.getRecdata();
      const expected = ObjectFactory.initializeRec(data);
      const recived = ObjectConverter.convertRec(expected);
      expect(recived.id).to.equal(expected.id);
      expect(recived.title).to.equal(expected.title)
      expect(recived.description).to.equal(expected.description)
      expect(recived.location).to.equal(expected.location)
      done();
    });
   });

  describe("Test 'convertUser' function", () => {
    it("Converts the given User", (done) => {
      const data = Helper.getUserdata();
      const expected = ObjectFactory.initializeUser(data);
      const recived = ObjectConverter.convertUser(expected);
      expect(recived.id).to.equal(expected.id);
      expect(recived.email).to.equal(expected.email);
      expect(recived.fullName).to.equal(expected.fullName);
      done();
    })
  });
 });
