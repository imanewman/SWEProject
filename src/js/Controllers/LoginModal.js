import DatabaseRetriever from "../Database/DatabaseRetriever.js";
import {
    CurrentUser
} from './MainController.js';

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
            this.authenticate();
        });

        $("#create_account_switch_button").click( () => {
            this.displaySignUp();
        });

        $("#create_account_button").click( () => {
            this.signUp();
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

    authenticate() {
        let username = $("#signin_username input").val();
        let password = $("#signin_password input").val();
        let invalidLogin = $("#invalid_login_text");

        //TODO: handle authenticate
        // let isValid = DatabaseRetriever.authenticate(username, password);
        let isValid = false;

        if (isValid) {
            // CurrentUser = DatabaseRetriever.getUser(username);

            this.hide();

            invalidLogin.addClass("hidden");
        } else {
            invalidLogin.removeClass("hidden");
        }
    }

    displayLogIn() {
        $("#signup").fadeOut(this.displaySpeed).promise().then( () => {
            $("#signin").fadeIn(this.displaySpeed);
        });
    }

    signUp() {
        let username = $("#signup_username input").val();
        let password = $("#signup_password input").val();
        let passwordVerify = $("#signup_password_confirm input").val();

        let invalidPWElement = $("#invalid_create_text");

        if (password !== passwordVerify) {
            invalidPWElement.removeClass("hidden");
        } else {
            invalidPWElement.addClass("hidden");
        }

        //TODO: handle sign up
    }

    hide() {
        $("#login_container").fadeOut(this.displaySpeed);

        this.displayLogIn();
    }
}

export default LoginModal;