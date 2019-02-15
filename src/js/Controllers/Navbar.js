class Navbar {
    constructor() {
        var currentPage;

        this.attachNavbar();
    }

    //attaches navbar to body of page
    attachNavbar() {
        $(document).ready( () => {
            $.get("./Navbar.html", (data) => {
                // attach navbar to body of page
                $("body").append($(data));

                // store current pages name
                this.currentPage = $(".nav_button-current");

                // attach controller functions to elements
                this.attachFunctions();
            });
        });
    }

    // attaches controller functions to elements
    attachFunctions() {
        // attach nav button functions
        $(".nav_button").click( (e) => {
            // get a pointer to html element clicked on
            let $element = $(e.currentTarget);

            // change page and animate change
            this.changePage($element);
            this.animateChangePage($element)
        });

        // redirect to home page if logo is clicked
        $("#rec_logo").click( (e) => {

        });
    }

    // changes page based on which nav button is clicked on
    changePage($element) {
        // console.log("change page: ");
        // console.log($element);
    }

    // animates change of page on navbar
    animateChangePage($element) {
        // console.log("animate change page: ");
        // console.log($element);

        // switch which nav button is highlighted
        $(".nav_button").removeClass("nav_button-current");
        $element.addClass("nav_button-current");
    }
}

const navbar = new Navbar();

// module.exports = navbar;