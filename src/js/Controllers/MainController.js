class MainController {
    constructor() {
        if(! MainController.instance){
            MainController.instance = this;
        }

        //TODO: load in navbar, load in Home page

        return MainController.instance;
    }
}

const Main = new MainController();

module.exports = Main;