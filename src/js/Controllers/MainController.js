// import "./Navbar.js";

class MainController {
    constructor() {
        if(! MainController.instance){
            MainController.instance = this;
        }

        return MainController.instance;
    }
}

const main = new MainController();

// module.exports = main;