const expect = require("chai").expect;
const Generator = require("../src/js/Algorithms/RecGenerator.js");
const Helper = require("../HelperClasses/Helper.js");
const User = require("../src/js/Model/User.js");

describe("RecGenerator Tests", () => {
    describe("Test generateUserRecs function", () => {
        it("Returns list of Users", (done) => {
          const data = Helper.getRecListData();
          const new_User = new User();
          const recived = Generator.generateUserRecs(new_User, data);
          console.log(recived);
          Helper.IterateFields(recived, [data[2]]);
          done();
        });
    });
});
