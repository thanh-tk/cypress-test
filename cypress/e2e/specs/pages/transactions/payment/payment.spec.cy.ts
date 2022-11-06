import { LoginPage } from "cypress/e2e/class/login";
import { SideBar } from "cypress/e2e/class/nav-bar";
import {
  NewPaymentPage,
  PaymentDetailsPage,
  PaymentPage,
} from "cypress/e2e/class/payment";
import { WAIT_TIME, WAIT_TIME_SKIP } from "cypress/e2e/constants";
import { PAYMENT_HAPPY_CASE } from "cypress/e2e/data/happy-case/payment";
import {
  checkDataByID,
  inputAutoFill,
  navigationPerdefined,
} from "cypress/e2e/utils/cypress-helper";

import { loginStep } from "../../login/login.runner";

describe("Payment Page", () => {
  const loginPage = new LoginPage();
  const sideBar = new SideBar();
  const pamentPage = new PaymentPage();
  const newPaymentPage = new NewPaymentPage();
  const paymentDetailsPage = new PaymentDetailsPage();

  const testData = PAYMENT_HAPPY_CASE;

  context("Payment Happy Case", () => {
    it("should able to add new payment", () => {
      loginStep(loginPage);
      sideBar.transactionComp().wait(WAIT_TIME).should("be.visible");
      const navChain = [sideBar.transactionComp(), sideBar.transPayment()];

      // before test navigating to the page
      navigationPerdefined(navChain);

      //check if add new button available and click it
      pamentPage.addNewBtn().should("be.visible").click();

      //Filling test payment data to forn
      inputAutoFill(testData);

      //click save payment button
      newPaymentPage.savePaymentBtn().click();

      //Check if data is as expected
      paymentDetailsPage
        .paymentNo()
        .wait(WAIT_TIME_SKIP)
        .should("be.visible")
        .should("include.text", "PV");

      //check if data match with the input data
      checkDataByID("payment_type", testData);

      cy.end();
    });
  });
});
