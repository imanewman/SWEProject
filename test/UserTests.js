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
   describe("Test 'getId' function", () => {
     it("returns the id for the User", (done) => {
       const myUserObject = new User();
       myUserObject.setId(3);
       const recived = myUserObject.getId();
       expect(recived).to.equal(3);
       done();
     });
    });
   describe("Test 'setEmail' function", () => {
     it("Sets the email field of User", (done) => {
       const myUserObject = new User();
       myUserObject.setEmail("Email@somthing.com");
       expect(myUserObject.email).to.equal("Email@somthing.com");
       done();
     });
    });
    describe("Test 'getEmail' function", () => {
      it("returns the email field of User", (done) => {
        const myUserObject = new User();
        myUserObject.setEmail("Email@somthing.com");
        const recived = myUserObject.getEmail();
        expect(recived).to.equal("Email@somthing.com");
        done();
      });
     });
  describe("Test 'setName' function", () => {
    it("Sets the fullName field of User", (done) => {
      const myUserObject = new User();
      myUserObject.setName("Joe");
      expect(myUserObject.fullName).to.equal("Joe");
      done();
    });
  });
  describe("Test 'getName' function", () => {
    it("returns the fullName field of User", (done) => {
      const myUserObject = new User();
      myUserObject.setName("Joe");
      const recived = myUserObject.getName();
      expect(recived).to.equal("Joe");
      done();
    });
  });
  describe("Test 'setAdmin' function", () => {
    it("Sets the adminPrivilege field of User", (done) => {
      const myUserObject = new User();
      myUserObject.setAdmin()
      expect(myUserObject.adminPrivilege).to.equal(true);
      done();
    });
  });
  describe("Test 'isAdmin' function", () => {
    it("returns the adminPrivilege field of User", (done) => {
      const myUserObject = new User();
      myUserObject.setAdmin()
      expect(myUserObject.isAdmin()).to.equal(true);
      done();
    });
  });
});
