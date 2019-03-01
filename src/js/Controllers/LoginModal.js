class LoginModal {
    constructor() {
        this.displaySpeed = 200;

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
        $("#login_container").fadeIn(this.displaySpeed);
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
        $("#login_container").fadeOut(this.displaySpeed);
    }
}

export default LoginModal;