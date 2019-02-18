const expect = require("chai").expect;
const ObjectFactory = require("../src/js/Database/ObjectFactory.js");
const Helper = require("../HelperClasses/Helper.js")

describe("ObjectFactory Tests", () => {
  describe("Test 'initializeRec' function", () => {
    it("Converts the given recObject", (done) => {
      const expected = [{
      id: 00000001,
      title: "Test",
      description: "This is a test",
      location: "Here",
      duration: 0,
      startTime: "04:00:00",
      tags: [], //may need to convert
      draft: true,
      contactInfo: "contactInfo",
      websiteLink: "website",
      rules: "rules",
      newFields: {}}];

      const recived = ObjectFactory.initializeRec(expected);
      Helper.IterateFields(expected, recived);
      //expect(recived).to.equal(expected);
      done();
    });
   });
 });
