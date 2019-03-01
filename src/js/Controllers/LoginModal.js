class LoginModal {
    constructor() {
        this.attach();
    }

    attach() {
        $(document).ready( () => {
            $.get("./LoginModal.html", (data) => {
                $("body").prepend($(data));

                this.attachEventHandlers();
            });
        });
    }

    attachEventHandlers() {
        $("#login_close_button").click( () => {
            this.hide();
        });
    }

    display() {
        $("#login_container").addClass("displayed");
    }

    displaySignUp() {

    }

    logIn() {

    }

    displayLogIn() {

    }

    signUp() {

    }

    hide() {
        $("#login_container").removeClass("displayed");
    }
}

export default LoginModal;