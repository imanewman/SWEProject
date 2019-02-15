class Navbar {
    constructor() {
        $(document).ready( () => {
            $.get("./Navbar.html", (data) => {
                $("body").append($(data));
            });
        });
    }

    changePage(pageName) {
    }
}

const navbar = new Navbar();

// module.exports = navbar;