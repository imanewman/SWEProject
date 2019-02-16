import Navbar from "./Navbar.js";
import { RecListModal, REC_IMPORTS } from "./RecListModal.js";

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

        let elementName = $element.text().trim();
        let newScene = nameToSceneMap[elementName];

        let addNewScene = () => {
            console.log("adding " + elementName);
            if (newScene) this.scene = newScene();
        };

        if (this.scene) {
            console.log("removing " + this.scene.title);
            this.scene.remove(addNewScene);
        } else {
            addNewScene();
        }

        //TODO: if converting from one rec list to another, dont need to make a new one
    }
}

const Main = new MainController();

const nameToSceneMap = {
    'home': () => { return null },
    'my recs': () => { return new RecListModal('My Recs', REC_IMPORTS.RECOMMENDED); },
    'all recs': () => { return new RecListModal('All Recs', REC_IMPORTS.ALL); },
    'watchlist': () => { return new RecListModal('Rec Watchlist', REC_IMPORTS.WATCHLIST); },
    'my posts': () => { return new RecListModal('My Posts', REC_IMPORTS.OWNED); }
};

export default Main;