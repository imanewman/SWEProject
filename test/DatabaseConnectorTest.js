const expect = require("chai").expect;
const DatabaseConnector = require("../src/Database.js");

DatabaseConnector.connect();

describe("Database Connector Tests", () => {
    describe("Test 'query' function", () => {
        it("shows whole table", (done) => {

            const expected = [ { Tables_in_TheRec: "Recs" } ];

            const checkEquals = (result) => {
                expect(result.Tables_in_TheRec).to.equal(expected.Tables_in_TheRec);

                done();
            };

            DatabaseConnector.query('SHOW TABLES;', checkEquals);
        });
    });

    describe("Test 'get' function", () => {
        it("gets a Rec from database", (done) => {

            const expected = [
                {
                    Description: "The class will go hike Bishop's Peak together!",
                    EventName: "CSC309 Bishop Hike",
                    RecID: "00000001",
                    Time: "03:00:00"
                }
            ];

            const checkEquals = (result) => {
                expect(result.length).to.equal(expected.length); // check that result is one row

                for (var idx = 0; idx < result.length; idx++) {
                    let resultRow = result[idx];
                    let expectedRow = expected[idx];

                    //console.log(`all keys: ${Object.keys(expectedRow)}`);

                    Object.keys(expectedRow).forEach( (key) => {
                        // console.log(`key: ${key}`);
                        // console.log(`-> ${JSON.stringify(resultRow[key])}`);
                        // console.log(`-> ${JSON.stringify(resultRow[key])}`);
                        expect(resultRow[key]).to.equal(expectedRow[key]); // check each value matches
                    });
                }

                done();
            };

            DatabaseConnector.get('Recs', 'RecID', '00000001', checkEquals);
        });

        it("gets a User from database", (done) => {

        });
    });
});

//https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha