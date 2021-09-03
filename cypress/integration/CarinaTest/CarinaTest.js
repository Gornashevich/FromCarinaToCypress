import {Given, Then, When} from "cypress-cucumber-preprocessor/steps"


import {HomePage} from "../../support/page_objects/HomePage"
import {SignInPage} from "../../support/page_objects/SignInPage"
import {RegistrationPage} from "../../support/page_objects/RegistrationPage";
import {ProductListPage} from "../../support/page_objects/ProductListPage";


const homePage = new HomePage()
const signInPage = new SignInPage()
const registrationPage = new RegistrationPage()
const plp = new ProductListPage()


Given(/^User is on signIn page$/, function () {
    homePage.visit()
    homePage.goToSignIn()
});

When("User type data", () => {
    signInPage.fillData()
    signInPage.submit()
})

Then("User on account page", () => {
    cy.url().should('include', '?controller=my-account')
})


Given(/^User on registration page$/, function () {
    signInPage.createNewEmail()
    signInPage.submitAddress()
});

When(/^User type personal information$/, function () {
    registrationPage.fillPersonalInfo()
    registrationPage.submitRegistration()
});

Then(/^Successful registration alert$/, function () {
    cy.url().should('include', '?controller=my-account')
});


Given(/^User is on product list page$/, function () {
    signInPage.clickOnWomenTag()
    plp.clickRandomItem()
});
When(/^User choose random product item$/, function () {

});