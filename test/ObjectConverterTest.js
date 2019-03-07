//import Rec from "../src/js/Model/Rec";
const Rec = require("../src/js/Model/Rec");

const expect = require("chai").expect;
const ObjectConverter = require("../src/js/Database/ObjectConverter.js");

describe("Object Converter Tests", () => {
    describe("Test 'conertRec' function", () => {
        it("shows whole table", (done) => {

            const expected = {
                "RecID": "0000001",
                "EventName": "Downtown SLO Farmers Market",
                "Description": "Description",
                "Location": "Higuera Street, San Luis Obispo, CA",
                "Date": "2019-02-21",
                "StartTime": "18:00:00",
                "EndTime": "21:00:00",
                "Tags": ['Farmers Market'],
                "draft": false,
                "ContactInfo": "Contact Info",
                "WebsiteLink": "https://downtownslo.com/farmers-market/",
                "Rules": "Rules",
                "UserID": "0001000"
            };

            const rec = new Rec(
                "0000001",
                "Downtown SLO Farmers Market",
                "Description",
                "Higuera Street, San Luis Obispo, CA",
                "2019-02-21",
                "18:00:00",
                "21:00:00",
                ['Farmers Market'],
                false,
                "Contact Info",
                "https://downtownslo.com/farmers-market/",
                '',
                "1000000"
            );

            for (let key in expected) {
                if (expected.hasOwnProperty(key)) {
                    expect(expected[key]).to.equal(rec[key]);
                }
            }
        });
    });
});
