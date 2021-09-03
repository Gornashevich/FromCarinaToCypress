export class RegistrationPage {

    objPOM = require('../../fixtures/objPOM.json');
    objData = require('../../fixtures/objData.json');

    fillPersonalInfo() {
        cy.get(this.objPOM.firstName).type(this.objData.firstName)
        cy.get(this.objPOM.lastName).type(this.objData.lastName)
        cy.get(this.objPOM.pass).type(this.objData.pass)
        cy.get(this.objPOM.street).type(this.objData.street)
        cy.get(this.objPOM.idState).select('10')
        cy.get(this.objPOM.city).type(this.objData.city)
        cy.get(this.objPOM.zip).type(this.objData.zip)
        cy.get(this.objPOM.mobile).type(this.objData.mobile)
    }

    submitRegistration() {
        cy.get(this.objPOM.submitRegistration).click({force: true})

    }

}