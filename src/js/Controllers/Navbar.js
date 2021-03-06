class Navbar {
    constructor(mainController) {
        this.main = mainController;
        this.currentPage = null;
        this.didScroll = false;

        this.attach();

        this.animateScroll();
    }

    //attaches navbar to body of page
    attach() {
        $(document).ready( () => {
            $.get("./Navbar.html", (data) => {
                // attach navbar to body of page
                $("body").append($(data));

                this.goToHomePage();

                // attach controller functions to elements
                this.attachEventHandlers();

                //TODO: show account buttons if logged in
            });
        });
    }

    // attaches controller functions to elements
    attachEventHandlers() {
        // redirect to home page if logo is clicked
        $("#rec_logo").click( () => {
            this.goToHomePage();
        });

        // attach nav button functions
        $(".nav_button").click( (e) => {
            // get a pointer to html element clicked on
            let $element = $(e.currentTarget);

            // change page and animate change
            this.main.changePage($element);
            this.animateChangePage($element)
        });

        $("#nav_account").click( () => {
            this.toggleAccountMenu();
        });

        $("#my_account_button").click( () => {
            this.goToAccountPage();
        });

        $("#log_out_button").click( () => {
            this.logOut();
        });

        $("#log_in_button").click( () => {
            this.logIn();
        });

        // update didScroll when window scrolls
        $(window).scroll( () => { this.didScroll = true } );

        // closes account menu if open when clicked away from
        $(document).mousedown( (e) => {
            if ($(e.target).closest("#nav_account_icon").length === 0 &&
                $(e.target).closest(".nav_account_dropdown").length === 0 &&
                $("#nav_account").hasClass("nav_account-open")) {

                this.toggleAccountMenu();
            }
        });


    }

    // animates change of page on navbar
    animateChangePage($element) {
        // console.log("animate change page: ");
        // console.log($element);

        // switch which nav button is highlighted
        $(".nav_button").removeClass("nav_button-current");
        $element.addClass("nav_button-current");
    }

    // goes to home page when logo is clicked
    goToHomePage() {
        let $element = $("#my_recs_button");

        this.currentPage = $element;

        // change page and animate change
        this.main.changePage($element);
        this.animateChangePage($element)
    }

    // goes to account page when option is clicked
    goToAccountPage() {

    }

    logIn() {
        this.main.login.display();
    }

    // logs out when option is clicked
    logOut() {

    }

    // toggles account menu open and closed
    toggleAccountMenu() {
        let $accountButton = $("#nav_account");
        let $accountIcon = $("#nav_account i");

        if ($accountButton.hasClass("nav_account-open")) {
            $accountButton.removeClass("nav_account-open");
            $accountIcon.addClass("hov-light");
        } else {
            $accountButton.addClass("nav_account-open");
            $accountIcon.removeClass("hov-light");
        }
    }

    // animates border shadow on navbar increasing when scrolled
    animateScroll() {
        //TODO: make transition in box shadow increase based on distance from top?
        setInterval( () => {
            if (this.didScroll) {
                this.didScroll = false;

                var scroll = $(window).scrollTop();

                if (scroll) {
                    $(".header_bar_container").addClass("shadow");
                } else {
                    $(".header_bar_container").removeClass("shadow");
                }
            }
        }, 50);
    }
}

export default Navbar;

//TODO: show log in button when logged out and vice versa