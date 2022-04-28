import BasePage from "../pageObjects/basePage";

class RegistrationPage extends BasePage {
    static get url() {
        return "/#/register";
    }

    static get email() {
        return cy.get("input#emailControl");
    }

    static get password() {
        return cy.get("input#passwordControl");
    }

    static get passwordRepeat() {
        return cy.get("input#repeatPasswordControl");
    }

    static get securityQuestionField() {
        return cy.get("div .mat-select-placeholder");
    }

    static get securityQuestionFieldItems() {
        return cy.get("span.mat-option-text");
    }

    static get securityAnswerField() {
        return cy.get("#securityAnswerControl");
    }

    static get registerButton() {
        return cy.get("#registerButton");
    }

}

export default RegistrationPage;
