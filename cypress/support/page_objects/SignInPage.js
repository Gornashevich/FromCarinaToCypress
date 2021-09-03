import {ProductListPage} from "./ProductListPage";

export class SignInPage {

    objPOM = require('../../fixtures/objPOM.json');
    objData = require('../../fixtures/objData.json');

    visit() {
        cy.visit('/?controller=my-account')
    }

    fillData() {
        cy.get(this.objPOM.email).type(this.objData.login)
        cy.get(this.objPOM.password).type(this.objData.pass)
    }

    submit() {
        const button = cy.get(this.objPOM.submit);
        button.click()
    }

    clickOnWomenTag() {
        const button = cy.get(this.objPOM.buttonWomen)
        button.click({force:true})

    }


    createNewEmail() {
        let random = Math.floor(Math.random() * 100)
        cy.get(this.objPOM.address).type(random + this.objData.login)
    }

    submitAddress(){
        cy.get(this.objPOM.createAcc).click()
    }


}

