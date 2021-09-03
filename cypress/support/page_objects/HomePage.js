import {Header} from "../components/Header";
import {SignInPage} from "./SignInPage";

export class HomePage {

    constructor() {
        this.header = new Header;
    }

    visit() {
        cy.visit('/')
    }


    goToSignIn() {
        const link = this.header.getSignInLink();
        link.click();

        const signIn = new SignInPage();
        return signIn;
    }
}

