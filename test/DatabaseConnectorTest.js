const expect = require("chai").expect;
const DatabaseConnector = require("../src/Database.js");

describe("Database Connector Tests", function() {
    describe("Test 'query' function", function() {
        it("shows whole table", function() {
            DatabaseConnector.connect();

            const actual = DatabaseConnector.query('SHOW TABLES;');
            const expected = [{"Tables_in_TheRec":"Recs"}];

            console.log(JSON.stringify(actual));

            expect(actual).to.equal(expected);

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