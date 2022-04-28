import BasePage from "../pageObjects/basePage";

class SavedPaymentsMethods extends BasePage {
    static get url() {
        return "/#/saved-payment-methods";
    }

    static get addNewCardButton() {
        return cy.get(".mat-expansion-panel-header")
    }

    static cardInfoInput(fieldName) {
        return cy.get("mat-label").contains(fieldName).parents(".mat-form-field-infix").find("input")
    }

    static cardInfoMenuInput(fieldName) {
        return cy.get("mat-label").contains(fieldName).parents(".mat-form-field-infix").find("select")
    }

    static get submitButton() {
        return cy.get("#submitButton");
    }

}

export default SavedPaymentsMethods;
