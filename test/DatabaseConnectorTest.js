const expect = require("chai").expect;
const DatabaseConnector = require("../src/Database.js");

describe("Database Connector Tests", function() {
    describe("Test 'query' function", function() {
        it("shows whole table", function(done) {
            DatabaseConnector.connect();

            const expected = [{"Tables_in_TheRec":"Recs"}];

            var checkEquals = function(result) {
                expect(result).to.equal(expected);
                done();
            }

            const actual = DatabaseConnector.query('SHOW TABLES;', checkEquals);

            DatabaseConnector.disconnect();
        });
    });

    // describe("Test 'get' function", function() {
    //     it("gets Recs from database", function() {
    //         DatabaseConnector.connect();
    //
    //         const actual = DatabaseConnector.get('Recs');
    //         const expected = {};
    //
    //         console.log(JSON.stringify(actual));
    //
    //         expect(actual).to.equal(expected);
    //
    //         DatabaseConnector.disconnect();
    //     });
    // });
});

//https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha