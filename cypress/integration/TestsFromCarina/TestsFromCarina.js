/// <reference types="cypress" />

import {onBasePage} from "../../support/page_objects/BasePage";
import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";


Given("User is on the base page and click sign in button", () => {
    cy.visit('/')
    onBasePage.ClickSignButton()
    cy.url().should('include', '?controller=authentication&back=my-account')
})


When("User type email {string} and {string}", (address,password) => {
    cy.fixture('loginData').then(data => {
        cy.get('#email').type(data.login)
        cy.get('#passwd').type(data.pass)
    })
});

Then("User click sign in button and get access to account page", () => {
    cy.get('#SubmitLogin').click()
    cy.url().wrap(data).should('include', '?controller=my-account')

})