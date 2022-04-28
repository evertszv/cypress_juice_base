import BasePage from "../pageObjects/basePage";

class SavedAddressPage extends BasePage {
    static get url() {
        return "/#/address/select";
    }

    static get addNewAddressButton() {
        return cy.get("button[aria-label='Add a new address']")
    }

}

export default SavedAddressPage;
 