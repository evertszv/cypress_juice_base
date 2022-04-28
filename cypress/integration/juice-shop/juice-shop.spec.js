import HomePage from "../../pageObjects/HomePage";
import LoginPage from "../../pageObjects/LoginPage";
import RegistrationPage from "../../pageObjects/RegistrationPage";
import SavedAddressPage from "../../pageObjects/SavedAddressPage";
import CreateAddressPage from "../../pageObjects/CreateAddressPage";
import SavedPaymentsMethods from "../../pageObjects/SavedPaymentsMethods";

describe("Juice-shop", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });
    var email = "randomEmail" + Math.floor(Math.random() * 100000) + '@gmail.com';
    var password = "RanDoMEh12736";
  it("Registration", () => {
   // TODO: Implement me
      HomePage.accountButton.click();
      HomePage.loginButton.click();
      LoginPage.assertIsCurrentPage();
      LoginPage.newCustomerLink.click();
      RegistrationPage.assertIsCurrentPage();
      
      RegistrationPage.email.type(email);
      RegistrationPage.password.type(password);
      RegistrationPage.passwordRepeat.type(password);
      RegistrationPage.securityQuestionField.click();
      RegistrationPage.securityQuestionFieldItems.contains("Mother's maiden name?").click();
      RegistrationPage.securityAnswerField.type("randomanswersASDF");
      RegistrationPage.registerButton.click();
      RegistrationPage.toastMessage.should('contain', 'Registration completed successfully. You can now log in.');

  });

    it("Login", () => {
        
        HomePage.assertIsCurrentPage();
        HomePage.accountButton.click();
        HomePage.loginButton.click();
        LoginPage.assertIsCurrentPage();
        LoginPage.email.type(email);
        LoginPage.password.type(password);
        LoginPage.loginButton.click();
        HomePage.assertIsCurrentPage();
        HomePage.accountButton.click();
        HomePage.goToUserProfileButton.should("contain", email);

    });
    describe("Juice-shop autologin", () => {
        beforeEach(() => {
            cy.login('demo', 'demo');
            HomePage.visit().wait(1500);
        });

        it("Login", () => {
            HomePage.accountButton.click();
            HomePage.goToUserProfileButton.should("contain,", "demo");
        });

        it("Search and validate Lemon", () => {
            HomePage.searchButton.click();
            HomePage.searchInputField.type("Lemon{enter}");
            HomePage.productCardName.contains("Lemon").click();
            HomePage.productCardDialogBox.should(
                "contain",
                "Sour but full of vitamins."
            )
        });

        it("Add a review for Raspberry", () => {
            HomePage.assertIsCurrentPage();
            HomePage.searchButton.click();
            HomePage.searchInputField.type("Raspberry{enter}");

            HomePage.productCardName.contains("Raspberry").click().wait(500);

            HomePage.reviewInputField.type("Tastes like metal");
            HomePage.reviewSubmitButton.click();

            HomePage.reviewsButton.wait(500).click();
            HomePage.comments.should("contain", "Tastes like metal");



        });

        it("Add address", () => {
            SavedAddressPage.visit();
            SavedAddressPage.addNewAddressButton.click();

            CreateAddressPage.assertIsCurrentPage();
            CreateAddressPage.countryInput.type("USA");
            CreateAddressPage.nameInput.type("JHON");
            CreateAddressPage.mobileNumberInput.type("12312312");
            CreateAddressPage.zipCodeInput.type("12345");
            CreateAddressPage.addressInput.type("Some random address in usa, alaska");
            CreateAddressPage.cityInput.type("sitka");
            CreateAddressPage.stateInput.type("Alaska");
            CreateAddressPage.submitButton.click();
            



        });

        it.only("Add Payment option", () => {
            SavedPaymentsMethods.visit();
            SavedPaymentsMethods.addNewCardButton.click();

            SavedPaymentsMethods.cardInfoInput("Name").type("SomeRandomName");
            SavedPaymentsMethods.cardInfoInput("Card Number").type("1234567890123456");
            SavedPaymentsMethods.cardInfoMenuInput("Expiry Month").select("2");
            SavedPaymentsMethods.cardInfoMenuInput("Expiry Year").select("2090");
            SavedPaymentsMethods.submitButton.click();

            SavedPaymentsMethods.toastMessage.should("contain", "Your card ending with 3456 has been saved for your convenience.")

        });
    })
    it("Search 500ml and validate All cards", () => {
        HomePage.searchButton.click();
        HomePage.searchInputField.type("500ml{enter}");

        HomePage.productCardName.contains("Eggfruit").click();
        HomePage.productCardDialogBox.should("contain", "Now with even more exotic flavour");

        HomePage.productCardDialogBoxCloseButton.click();

        HomePage.productCardName.contains("Lemon").click();
        HomePage.productCardDialogBox.should("contain", "Sour but full of vitamins.");

        HomePage.productCardDialogBoxCloseButton.click();

        HomePage.productCardName.contains("Strawberry").click();
        HomePage.productCardDialogBox.should("contain", "Sweet & tasty!");
        

    });

    it("Read a review for King", () => {
        HomePage.searchButton.click();
        HomePage.searchInputField.type("King{enter}");

        HomePage.productCardName.contains("King").click();

        HomePage.reviewsButton.wait(500).click();

        HomePage.comments.should("contain", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!")



    });

    
});
