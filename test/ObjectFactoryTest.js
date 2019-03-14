const expect = require("chai").expect;
const ObjectFactory = require("../src/js/Database/ObjectFactory.js");
const Helper = require("../HelperClasses/Helper.js")


describe("ObjectFactory Tests", () => {
  describe("Test 'initializeRec' function", () => {
    it("Converts the given recObject", (done) => {
      const expected = Helper.getRecdata();
      const recived = ObjectFactory.initializeRec(expected);
      expect(recived.draft).to.equal(expected.Draft);
      expect(recived.title).to.equal(expected.EventName);
      expect(recived.description).to.equal(expected.Description);
      expect(recived.location).to.equal(expected.Location);
      expect(recived.date).to.equal(expected.Date);
      expect(recived.startTime).to.equal(expected.StartTime);
      expect(recived.endTime).to.equal(expected.EndTime);
      expect(recived.tags).to.equal(expected.MajorTag);
      expect(recived.draft).to.equal(expected.Draft);
      expect(recived.contactInfo).to.equal(expected.ContactInfo);
      expect(recived.websiteLink).to.equal(expected.WebsiteLink);
      expect(recived.imageLink).to.equal(expected.ImgLink);
      expect(recived.rules).to.equal(expected.Rules);
      expect(recived.ownerId).to.equal(expected.UserID);
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
      expect(recived.passwordHash).to.equal(expected.passwordHash);
      expect(recived.preferredEvents).to.equal(expected.preferredEvents);
      done();
    })
  });
 });
