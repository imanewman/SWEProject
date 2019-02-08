class PrivateTestRunner {

}

const TestRunner = new PrivateTestRunner();

Object.freeze(TestRunner);

module.exports = TestRunner;