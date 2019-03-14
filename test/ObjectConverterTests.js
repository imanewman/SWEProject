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

      expect(recived.RecID).to.equal(expected.id);
      expect(recived.EventName).to.equal(expected.title);
      expect(recived.Description).to.equal(expected.description);
      expect(recived.Location).to.equal(expected.location);
      expect(recived.Date).to.equal(expected.date);
      expect(recived.StartTime).to.equal(expected.startTime);
      expect(recived.EndTime).to.equal(expected.endTime);
      expect(recived.MajorTags).to.equal(expected.tags);
      expect(recived.draft).to.equal(expected.draft);
      expect(recived.ContactInfo).to.equal(expected.contactInfo);
      expect(recived.WebsiteLink).to.equal(expected.websiteLink);
      expect(recived.ImgLink).to.equal(expected.imageLink);
      expect(recived.Rules).to.equal(expected.rules);
      expect(recived.UserID).to.equal(expected.ownerId);
      done();
    });
   });

  describe("Test 'convertUser' function", () => {
    it("Converts the given User", (done) => {
      const data = Helper.getUserdata();
      const expected = ObjectFactory.initializeUser(data);
      const recived = ObjectConverter.convertUser(expected);

      Helper.checkUserFields(recived, expected);
      
      done();
    })
  });
 });
