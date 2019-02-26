const expect = require("chai").expect;
const Rec = require("../src/js/Model/Rec.js");


describe("Rec Tests", () => {
  describe("Test 'setDescription' function", () => {
    it("Sets the description for the Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setDescription("Test");
      expect(myRecObject.description).to.equal("Test");
      done();
    });
   });

  describe("Test 'setTitle' function", () => {
    it("sets the description field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setTitle("New Title")
      expect(myRecObject.title).to.equal("New Title");
      done();
    });
  });
 });
