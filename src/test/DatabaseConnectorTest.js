const expect = require("chai").expect;
const DatabaseConnector = require("../src/DatabaseConnector.js");

describe("Database Connector Tests", function() {
    describe("Test 'connect' function", function() {
        it("connects to database", function() {
            expect(DatabaseConnector.connect().to.equal(NaN));
        });
    });
});