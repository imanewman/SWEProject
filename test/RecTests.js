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
   describe("Test 'getDescription' function", () => {
     it("get the description field of Rec", (done) => {
       const myRecObject = new Rec();
       myRecObject.setDescription("Test");
       const recived = myRecObject.getDescription();
       expect(recived).to.equal("Test");
       done();
     });
   });
  describe("Test 'setTitle' function", () => {
    it("sets the title field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setTitle("New Title")
      expect(myRecObject.title).to.equal("New Title");
      done();
    });
  });
  describe("Test 'getTitle' function", () => {
    it("returns the title field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setTitle("New Title");
      const recived = myRecObject.getTitle();
      expect(recived).to.equal("New Title");
      done();
    });
  });
  describe("Test 'setLocation' function", () => {
    it("sets the location field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setLocation("Here")
      expect(myRecObject.location).to.equal("Here");
      done();
    });
  });
  describe("Test 'getLocation' function", () => {
    it("returns the location field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setLocation("Here")
      const recived = myRecObject.getLocation();
      expect(recived).to.equal("Here");
      done();
    });
  });
  describe("Test 'setDate' function", () => {
    it("sets the date field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setDate("2019-02-25");
      expect(myRecObject.date).to.equal("2019-02-25");
      done();
    });
  });
  describe("Test 'getDate' function", () => {
    it("returns the date field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setDate("2019-02-25");
      const recived = myRecObject.getDate();
      expect(recived).to.equal("2019-02-25");
      done();
    });
  });
  describe("Test 'setStartTime' function", () => {
    it("sets the startTime field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setStartTime("3:00:00");
      expect(myRecObject.startTime).to.equal("3:00:00");
      done();
    });
  });
  describe("Test 'getStartTime' function", () => {
    it("returns the startTime field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setStartTime("3:00:00");
      const recived = myRecObject.getStartTime();
      expect(recived).to.equal("3:00:00");
      done();
    });
  });
  describe("Test 'setEndTime' function", () => {
    it("sets the endTime field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setEndTime("4:00:00");
      expect(myRecObject.endTime).to.equal("4:00:00");
      done();
    });
  });
  describe("Test 'getEndTime' function", () => {
    it("returns the endTime field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setEndTime("4:00:00");
      const recived = myRecObject.getEndTime();
      expect(recived).to.equal("4:00:00");
      done();
    });
  });
  describe("Test 'setdraft' function", () => {
    it("sets the draft field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setDraft(true);
      expect(myRecObject.draft).to.equal(true);
      done();
    });
  });
  describe("Test 'getdraft' function", () => {
    it("returns the draft field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setDraft(true);
      const recived = myRecObject.getDraft();
      expect(recived).to.equal(true);
      done();
    });
  });
  describe("Test 'setContactInfo' function", () => {
    it("sets the contactInfo field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setContactInfo("info");
      expect(myRecObject.contactInfo).to.equal("info");
      done();
    });
  });
  describe("Test 'getContactInfo' function", () => {
    it("returns the contactInfo field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setContactInfo("info");
      const recived = myRecObject.getContactInfo();
      expect(recived).to.equal("info");
      done();
    });
  });
  describe("Test 'setLink' function", () => {
    it("sets the websiteLink field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setLink("Link");
      expect(myRecObject.websiteLink).to.equal("Link");
      done();
    });
  });
  describe("Test 'getLink' function", () => {
    it("returns the websiteLink field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setLink("Link");
      const recived = myRecObject.getLink();
      expect(recived).to.equal("Link");
      done();
    });
  });
  describe("Test 'setRules' function", () => {
    it("sets the rules field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setRules("rules");
      expect(myRecObject.rules).to.equal("rules");
      done();
    });
  });
  describe("Test 'getRules' function", () => {
    it("returns the rules field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setRules("rules");
      const recived = myRecObject.getRules();
      expect(recived).to.equal("rules");
      done();
    });
  });
  describe("Test 'setImageLink' function", () => {
    it("sets the imageLink field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setImageLink("ImageLink");
      expect(myRecObject.imageLink).to.equal("ImageLink");
      done();
    });
  });
  describe("Test 'getImageLink' function", () => {
    it("returns the imageLink field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setImageLink("ImageLink");
      const recived = myRecObject.getImageLink();
      expect(recived).to.equal("ImageLink");
      done();
    });
  });
  describe("Test 'setWebsiteLink' function", () => {
    it("sets the websiteLink field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setWebsiteLink("WebsiteLink");
      expect(myRecObject.websiteLink).to.equal("WebsiteLink");
      done();
    });
  });
  describe("Test 'getWebsiteLink' function", () => {
    it("Returns the websiteLink field of Rec", (done) => {
      const myRecObject = new Rec();
      myRecObject.setWebsiteLink("WebsiteLink");
      const recived = myRecObject.getWebsiteLink();
      expect(recived).to.equal("WebsiteLink");
      done();
    });
  });
});
