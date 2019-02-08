class PrivateTestRunner {

}

const TestRunner = new PrivateTestRunner();

Object.freeze(TestRunner);

module.exports = TestRunner;

//Test examples:
//https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
