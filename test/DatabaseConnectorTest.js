const expect = require("chai").expect;
const DatabaseConnector = require("../src/Database.js");

describe("Database Connector Tests", () => {
    describe("Test 'query' function", () => {
        it("shows whole table", (done) => {
            DatabaseConnector.connect();

            const expected = [ { Tables_in_TheRec: "Recs" } ];

            const checkEquals = (result) => {
                expect(result.Tables_in_TheRec).to.equal(expected.Tables_in_TheRec);

                done();

                DatabaseConnector.disconnect();
            };

            DatabaseConnector.query('SHOW TABLES;', checkEquals);
        });
    });

    // describe("Test 'get' function", () => {
    //     it("gets Recs from database", (done) => {
    //         DatabaseConnector.connect();
    //
    //         const expected = {};
    //
    //         const checkEquals = (result) => {
    //             expect(result).to.equal(expected);
    //
    //             done();
    //
    //             DatabaseConnector.disconnect();
    //         };
    //
    //         DatabaseConnector.get('Recs', '', '', checkEquals);
    //     });
    // });
});

//https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha