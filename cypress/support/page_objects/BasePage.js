export class BasePage {

    ClickSignButton() {
        cy.contains('Sign in').click()
    }
}

export const onBasePage = new BasePage();