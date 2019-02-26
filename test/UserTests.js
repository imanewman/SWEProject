const expect = require("chai").expect;
const User = require("../src/js/Model/User.js");


describe("User Tests", () => {
  describe("Test 'setId' function", () => {
    it("Sets the id for the User", (done) => {
      const myUserObject = new User();
      myUserObject.setId(3);
      expect(myUserObject.id).to.equal(3);
      done();
    });
   });

  describe("Test 'setName' function", () => {
    it("Sets the fullName field of User", (done) => {
      const myUserObject = new User();
      console.log(myUserObject.fullName);
      myUserObject.setName("Joe")
      console.log(myUserObject.fullName);
      expect(myUserObject.fullName).to.equal("Joe");
      done();
    });
  });
 });
