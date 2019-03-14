const expect = require("chai").expect;
const DatabaseConnector = require("../src/Database.js");
const Retriever = require("../src/js/Database/DatabaseRetriever.js");
const Rec = require("../src/js/Model/Rec");
const Helper = require("../HelperClasses/Helper.js");

describe("DatabaseRetriever Tests", () => {
    describe("Test getRec function", () => {
        it("Returns Rec for the given ID", (done) => {
          const expected = Helper.getRecdata();
          const recived = Retriever.getRec("2");

          Helper.checkRecFields(recived, expected);
        
          done();
        });
    });
});
