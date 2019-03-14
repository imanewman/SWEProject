const expect = require("chai").expect;
const DatabaseConnector = require("../src/Database.js");
const Retriever = require("../src/js/Database/DatabaseRetriever.js");
const Rec = require("../src/js/Model/Rec");

//DatabaseConnector.connect();

describe("DatabaseRetriever Tests", () => {
    describe("Test getRec function", () => {
        it("Returns Rec", (done) => {
          const recived = Retriever.getRec(2);
          console.log(recived.id);
          done();
        });
    });
});
