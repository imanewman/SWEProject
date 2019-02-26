const expect = require("chai").expect;
const Rec = require("../src/js/Model/Rec.js");
//const Helper = require("../HelperClasses/Helper.js")

describe("Rec Tests", () => {
  describe("Test 'setDescription' function", () => {
    it("Sets the description for the Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setDescription("Test");
      expect(myRecObject.description).to.equal("Test");
      done();
    });
   });

  /*describe("Test 'initializeRec' function", () => {
    it("Converts the given userObject", (done) => {
      const expected = Helper.getUserdata();
      const recived = ObjectFactory.initializeUser(expected);
      expect(recived.id).to.equal(expected.id);
      expect(recived.email).to.equal(expected.email);
      expect(recived.fullName).to.equal(expected.fullName);
      done();
    })*/
  //});
 });
