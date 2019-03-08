const expect = require("chai").expect;
const DatabaseConnector = require("../src/Database.js");
const Helper = require("../HelperClasses/Helper.js")

DatabaseConnector.connect();

var totalTests = 3;
var doneTests = 0;

describe("Database Connector Tests", () => {
    describe("Test 'query' function", () => {
        it("shows whole table", (done) => {

            const expected = [ { Tables_in_TheRec: "Recs" } ];

            const checkEquals = (result) => {
                expect(result.Tables_in_TheRec).to.equal(expected.Tables_in_TheRec);

                done();

                if (++doneTests == totalTests) {
                    DatabaseConnector.disconnect();
                }
            };

            DatabaseConnector.query('SHOW TABLES;', checkEquals);
        });
    });

    describe("Test 'get' function", () => {
        it("gets a Rec from database", (done) => {

            const expected = [
                {
                    Description: "The Downtown SLO Farmersâ€™ Market is undoubtedly one of the most treasured events on the Central Coast and has a long history of bringing locals and visitors together to eat, shop, listen to music and connect with their community. The Market takes place every Thursday evening from 6:00 PM to 9:00 PM (weather permitting and excluding major holidays) on Higuera Street between Nipomo and Osos streets.",
                    EventName: "Downtown SLO Farmers Market",
                    RecID: 1,
                    StartTime: "18:00:00"
                }
            ];

            const checkEquals = (result) => {

                Helper.IterateFields(result, expected);
                done();

                if (++doneTests == totalTests) {
                    DatabaseConnector.disconnect();
                }
            };

            DatabaseConnector.get('Recs', 'RecID', '00000001', checkEquals);
        });

        it("gets a User from database", (done) => {
            const expected = [
                {
                    UserName: "Student1",
                    Password: "Test3",
                    Email: "student1@calpoly.edu",
                    Rating: 0,
                    RatingNum: 0
                }
            ];

            const checkEquals = (result) => {

                Helper.IterateFields(result, expected);
                done();

                if (++doneTests == totalTests) {
                    DatabaseConnector.disconnect();
                }
            };

            DatabaseConnector.get('Users', 'UserID', '00000003', checkEquals);
        });
    });
});

//https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
