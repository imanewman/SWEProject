import Navbar from "./Navbar.js";
import LoginModal from "./LoginModal.js";
import AccountModal from "./AccountModal.js";
import RecListFactory from "./RecListFactory.js";
import User from "../Model/User.js";

class MainController {
    constructor() {
        this.navbar = new Navbar(this);
        this.login = new LoginModal();
        this.scene = null;
        this.textTyped = '';

        this.nameToSceneMap = {
            'My Account': () => { return new AccountModal(); },
            'my recs': () => { return RecListFactory.createMyRecsList(); },
            'all recs': () => { return RecListFactory.createAllRecsList(); },
            'watchlist': () => { return RecListFactory.createRecWatchlist(); },
            'my posts': () => { return RecListFactory.createMyPosts(); }
        };

        this.checkForRex();

        if(! MainController.instance){
            MainController.instance = this;
        }

        return MainController.instance;
    }

    // changes page based on which nav button is clicked on
    changePage($element) {
        // console.log("change page: ");
        // console.log($element);

        let elementName = $element.text().trim();
        let newScene = this.nameToSceneMap[elementName];

        let addNewScene = () => {
            if (newScene) this.scene = newScene();
        };

        if (this.scene) {
            this.scene.remove(addNewScene);
        } else {
            addNewScene();
        }

        //TODO: if converting from one rec list to another, dont need to make a new one
    }

    checkForRex() {
        let setRex = () => {
            document.body.innerHTML = document.body.innerHTML
                .replace('Recs', 'Rex')
                .replace('the rec', 'the rex')
                .replace('my recs', 'my rex')
                .replace('all recs', 'all rex')
                .replace('Rec', 'Rex');
        };

        $("body").keypress( (e) => {
            this.textTyped += e.key;

            if (this.textTyped.includes("rex")) {
                setRex();
            }
        })
    }
}

var CurrentUser = new User();

const Main = new MainController();

export {
    Main,
    CurrentUser
};