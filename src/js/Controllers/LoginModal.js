class LoginModal {
    constructor() {
        this.displaySpeed = 100;

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

        $("#signin_button").click( () => {
            this.logIn();
        });

        $("#create_account_switch_button").click( () => {
            this.displaySignUp();
        });
    }

    display() {
        $("#login_container").fadeIn(this.displaySpeed);
    }

    displaySignUp() {
        $("#signin").fadeOut(this.displaySpeed).promise().then( () => {
            $("#signup").fadeIn(this.displaySpeed);
        });
    }

    logIn() {

    }

    displayLogIn() {
        $("#signup").fadeOut(this.displaySpeed).promise().then( () => {
            $("#signin").fadeIn(this.displaySpeed);
        });
    }

    signUp() {

    }

    hide() {
        $("#login_container").fadeOut(this.displaySpeed);

        this.displayLogIn();
    }
}

export default LoginModal;