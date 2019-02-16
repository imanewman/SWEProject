import Navbar from "./Navbar.js";
import {RecListModal, REC_IMPORTS} from "./RecListModal";

class MainController {
    constructor() {
        this.navbar = new Navbar(this);
        this.scene = null;

        if(! MainController.instance){
            MainController.instance = this;
        }

        return MainController.instance;
    }

    // changes page based on which nav button is clicked on
    changePage($element) {
        // console.log("change page: ");
        // console.log($element);

        let elementName = $element.text();
        let newScene = nameToSceneMap[elementName];

        if (newScene) {
            this.scene.remove();
            this.scene = newScene();
        }
    }
}

const Main = new MainController();

const nameToSceneMap = {
    'home': null,
    'my recs': () => { return new RecListModal('My Recs', REC_IMPORTS.RECOMMENDED); },
    'all recs': () => { return new RecListModal('My Recs', REC_IMPORTS.ALL); },
    'watchlist': () => { return new RecListModal('My Recs', REC_IMPORTS.WATCHLIST); },
    'my posts': () => { return new RecListModal('My Recs', REC_IMPORTS.OWNED); }
};

export default Main;