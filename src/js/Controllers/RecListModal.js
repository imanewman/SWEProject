import RecModal from "./RecModal.js";
import Rec from "../Model/Rec.js";
import DatabaseRetriever from '../Database/DatabaseRetriever.js';
import RecFilter from './RecFilter.js';
import ObjectConverter from '../Database/ObjectConverter.js';

class RecListModal {
    static REC_IMPORTS = {
        ALL: 0,
        RECOMMENDED: 1,
        WATCHLIST: 2,
        OWNED: 3,
        TEST: 4
    };

    constructor(
        title,
        importType
    ) {
        this.title = title;
        this.importType = importType;
        this.currentRecs = [];
        this.currentRecModals = [];
        this.checkboxes = [];
        this.displaySpeed = 200;
        this.didScroll = false;

        if (test) { this.importType = RecListModal.REC_IMPORTS.TEST }

        this.attach();

        this.animateScroll();
    }

    // attaches rec list to body of page
    attach() {
        $(document).ready( () => {
            $.get("./RecListModal.html", (data) => {
                $("#scene").append($(data));
                $("#rec_list_container").hide();

                this.attachEventHandlers();
                this.setName();
                this.display();

                setTimeout(() => { this.importRecs() }, this.displaySpeed);
            });
        });
    }

    attachEventHandlers() {
        // update didScroll when window scrolls
        $(window).scroll( () => { this.didScroll = true } );

        this.filter = new RecFilter(this);

        $("#rec_list_add_button").click( () => { this.addNewRec(); })
    }

    // sets the name of this rec list
    setName(title = this.title) { $("#rec_list_title_text").text(title); }

    getRecs() { return this.currentRecs; }
    getRecModals() { return this.currentRecModals; }

    // displays the rec list
    display(callback = () => {}) {
        $("#rec_list_container").delay(this.displaySpeed).fadeIn(this.displaySpeed, callback);

        $("#rec_filter").css('width', '0').delay(this.displaySpeed).animate({
            'width': '14em'
        }, this.displaySpeed);

        $("#rec_list_header").css('top', '0').delay(this.displaySpeed).animate({
            'top': '4em'
        }, this.displaySpeed);
    }

    // hides this rec list
    hide(callback = () => {}) {
        $("#rec_filter").animate({
           'width': '0'
        }, this.displaySpeed);

        $("#rec_list_header").animate({
            'top': '0'
        }, this.displaySpeed);

        $("#rec_list_container").fadeOut(this.displaySpeed, callback);
    }

    // removes this rec list from the page
    remove(callback = () => {}) {
        let removeScene = () => {
            $("#scene").empty().promise().done(callback);
        };

        this.hide(removeScene);
    }

    addNewRec() {
        let rec = new Rec();
        let recModal = new RecModal(rec, true);

        this.currentRecModals.push(recModal);
    }

    // imports recs into the rec list
    importRecs() {
        let userID = localStorage.getItem("userId");

        switch (this.importType) {
            case RecListModal.REC_IMPORTS.WATCHLIST:
                this.currentRecs = DatabaseRetriever.getRecsByWatchList(userID);
                break;
            case RecListModal.REC_IMPORTS.OWNED:
                this.currentRecs = DatabaseRetriever.getRecsByUserId(userID);
                break;
            case RecListModal.REC_IMPORTS.RECOMMENDED:
                this.currentRecs = DatabaseRetriever.getRecsByRecommended();
                break;
            case RecListModal.REC_IMPORTS.TEST:
                this.currentRecs = testRecs;
                break;
            default:
                this.currentRecs = DatabaseRetriever.getRecs();
        }


        // remove recs currently displayed
        this.removeRecs();

        // add all recs into displayed list
        for (let i = 0; i < this.currentRecs.length; i++) {
            let currentRec = this.currentRecs[i];
            let newRecModal = new RecModal(currentRec);

            this.currentRecModals.push(newRecModal);
        }
    }

    // removes all recs from the rec list
    removeRecs() {
        $("#rec_items").empty();

        this.currentRecModals = [];
    }

    // animates border shadow on navbar increasing when scrolled
    animateScroll() {
        //TODO: make transition in box shadow increase based on distance from top?
        setInterval( () => {
            if (this.didScroll) {
                this.didScroll = false;

                var scroll = $(window).scrollTop();

                if (scroll) {
                    $("#rec_list_header").addClass("shadow");
                } else {
                    $("#rec_list_header").removeClass("shadow");
                }
            }
        }, 50);
    }
}

let test = false;

if (test) {
    localStorage.setItem("userId", "5");
}

let testRecs = [
    new Rec(
        "1",
        "Downtown SLO Farmers Market",
        "The Downtown SLO Farmers’ Market is undoubtedly one of the most treasured events on the Central Coast and has a long history of bringing locals and visitors together to eat, shop, listen to music and connect with their community.\nThe Market takes place every Thursday evening from 6:00 PM to 9:00 PM (weather permitting and excluding major holidays) on Higuera Street between Nipomo and Osos streets.",
        "Higuera Street, San Luis Obispo, CA",
        "2019-02-21",
        "18:00:00",
        "21:00:00",
        ['Farmers Market'],
        false,
        "For more information about Downtown SLO Farmers’ Market please contact our Market Manager at (805) 541-0286 ext. 2 or farmers@DowntownSLO.com",
        "https://downtownslo.com/farmers-market/",
        'https://downtownslo.com/wp-content/uploads/2019/02/2.21.19-821x1024.jpg',
        "California Health & Safety Code 114259.5 stipulates that live animals aren’t allowed in certified farmers markets (such as ours) and permitted food facilities, with the exception of service animals. Fraudulently misrepresenting service animals is a misdemeanor (California Penal Code 365.7 [a]). Please, leave your pets at home to keep our Market clean and safe for all guests.",
        "1",
        {}
    ),
    new Rec(
        "2",
        "When Social Media Companies, Research Ethics, and Human Rights Collide",
        "As social media and other tech companies face serious ethical criticism—about privacy, algorithmic bias, emotional manipulation, and other concerns—this talk offers a new “human data research” paradigm for technology’s next wave of social worlds.  Most of these “ethical dilemmas” arise not because bad-intentioned actors, but because methods of investigation and innovation are pushed to capacity and failing us.  For instance, traditional principles of human subject research aren’t suited for online environments today, which are at once familiar software (like a spreadsheet), but also controlled settings (like a lab) and deeply social and dynamic (like a backyard BBQ).  The path forward isn’t in listing an abstract set of principles but hammering out a new, shared course of action that seeks to respect the rights/freedoms of individuals and society in these new online environments.  Researchers and industry need to earn the public’s trust in order to protect their own future.",
        "Performing Arts Center, 1 Grand Ave, San Luis Obispo, CA",
        "2019-02-19",
        "11:00:00",
        "13:00:00",
        ['Speech'],
        false,
        "For more information, contact Professor Patrick Lin, Philosophy Department: palin@calpoly.edu",
        "https://www.microsoft.com/en-us/research/people/mlg/",
        'https://www.pacslo.org/ArticleMedia/Images/PAC/Site/PAC_SLO_logo.jpg',
        "None Specified",
        "1",
        {}
    ),
    new Rec(
        "3",
        "Uncork The Mic (Unconventional Open Mic Sesh)",
        "Indie singer-songwriter and multi-instrumentalist Cassi Nicholls combines compelling melodies, potent lyrics, and kaleidoscopic emotions to sculpt her tracks into what listeners experience as living, heart-stirring memoirs.  (She has captivated the crowd at two of my events, and I know from her stage presence and songwriting ability, she has the potential to rise to the top...M). Join us on Wednesday February 20th at one of the hottest SLO venues for live music.  During this event the venue becomes a listening room for the singer/songwriters, and we thank you ahead of time for your kindness by giving each artist your full attention. ",
        "181 Tank Farm Rd Ste. 110, San Luis Obispo, CA 93401",
        "2019-02-20",
        "19:00:00",
        "21:00:00",
        ['Open Mic'],
        false,
        "To learn more about her journey, upcoming shows, and debut EP release, you may as follow Cassi Nicholls on Facebook (@CassiNMusic) and Instagram (@thegirlmusic). (bio by Ivy Cayden)",
        "https://www.7sistersbrewing.com/events-page",
        'https://static1.squarespace.com/static/595591b09f7456c3e0135686/59df60232994caa6a873399c/5c5eee8853450a883a16d178/1549725383822/cassi+nichols.jpg',
        "None Specified",
        "2",
        {}
    ),
    new Rec(
        "4",
        "Cal Poly Men's Basketball vs UC Irvine",
        "Cal Poly Men's Basketball playing against UC Irvine at UC Irvine.",
        "University of California Irvine, Irvine, CA",
        "2019-02-21",
        "19:00:00",
        "22:00:00",
        ['Sports'],
        false,
        "None Specified",
        "https://www.gopoly.com/sports/mbkb/2018-19/schedule#",
        "https://sportsfly.cbsistatic.com/bundles/sportsmediacss/images/team-logos/ncaa/CPOLY.svg",
        "None Specified",
        "2",
        {}
    ),
    new Rec(
        "5",
        "YCEUM: Mental Health Awards & Education Luncheon",
        "The Lyceum is an Annual Mental Health Awards & Education Luncheon, held on National Mental Health Day. The Lyceum awards & education luncheon honors a local leader in mental health, an aspiring associate-trainee level therapist, and features a keynote address from an innovative voice in the field of Psychology. Lyceum offers continuing education credits for mental health professionals, non-profit/social service sector networking, and awareness of Community Counseling Center's (CCC) leadership and unique history on the Central Coast. All proceeds benefit Community Counseling Center (CCC) Training & Education Programs.",
        "Ventana Grill, 2575 Price Street, Pismo Beach, CA",
        "2019-03-01",
        "12:00:00",
        "13:30:00",
        ['Charity'],
        false,
        "None Specified",
        "https://www.eventbrite.com/e/lyceum-mental-health-awards-education-luncheon-tickets-55295189400?aff=ebdssbdestsearch",
        "https://storage.googleapis.com/cccslo-org/uploads/lyceum2.png",
        "Tickets: $50.00",
        "2",
        {}
    )
    // new Rec(
    //     "0000006",
    //     "Name",
    //     "Desc",
    //     "Location",
    //     "2019-02-20",
    //     "19:00:00",
    //     "21:00:00",
    //     ['Tag'],
    //     true,
    //     "Contact",
    //     "Website",
    //     "Image",
    //     "Rules",
    //     "1000000",
    //     {}
    // )
];

export default RecListModal;