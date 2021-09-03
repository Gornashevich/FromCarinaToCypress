export class Header {

    objPOM = require('../../fixtures/objPOM.json');

    getSignInLink() {
        return cy.get(this.objPOM.signInButton)
    }

}