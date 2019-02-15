class Navbar {
    constructor() {
        $(document).ready( () => {
            $.get("./Navbar.html", (data) => {
                $("body").append($(data));
                this.attachFunctions();
            });
        });
    }

    attachFunctions() {
        $(".nav_button_text").click(this.changePage);
    }

    changePage() {
        console.log(this);
    }
}

const navbar = new Navbar();

module.exports = navbar;