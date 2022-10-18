import {
  newPaymentPage,
  paymentDetail,
  vtms_PaymentPage,
} from "./../../page-obj/vtms";
import { vtms_login, vtms_mainPage } from "../../page-obj/vtms";
import { TEST_DATA_PAYMENT } from "../../test-data";

describe("VTMS", () => {
  const vtmsLogin = new vtms_login();
  const vtmsMainPage = new vtms_mainPage();
  const vtmsPaymentPage = new vtms_PaymentPage();
  const vtmsAddnewPage = new newPaymentPage();
  const vtmsPaymentDetail = new paymentDetail();
  // before(() => {
  //   cy.visit("http://localhost:3001", { failOnStatusCode: false });
  // });
  beforeEach(() => {
     cy.visit("http://localhost:3001", { failOnStatusCode: false });
  });

  context("Login", () => {
    it("login", () => {
      vtmsLogin.userName().type("vtms_ucars");
      cy.wait(1000);
      vtmsLogin.password().type("Ucars@123");
      cy.wait(1000);
      vtmsLogin.login().click();
      cy.wait(1000);
      vtmsMainPage.transactionComp().should("be.visible");
      // vtmsMainPage.transactionComp().click();
      // cy.wait(1000);
      // if (vtmsMainPage.transPayment()) {
      //   vtmsMainPage.transPayment().click();
      //   vtmsPaymentPage.addNewBtn().should("be.visible");
      //   vtmsPaymentPage.addNewBtn().click();
      //   selectDropDown("payment_type", TEST_DATA_PAYMENT.payment_type);
      //   vtmsAddnewPage.paymentDate().type(TEST_DATA_PAYMENT.date);
      //   selectDropDown("cont_name", TEST_DATA_PAYMENT.cont_name);
      //   selectDropDown("subcode", TEST_DATA_PAYMENT.sub_code);
      //   vtmsAddnewPage.valueAmt().type(TEST_DATA_PAYMENT.valueAmt);
      //   vtmsAddnewPage.savePaymentBtn().click();
      // }
      // cy.wait(1000);
      // vtmsPaymentDetail.paymentNo().should("be.visible");
      // // const regex: RegExp = new RegExp(/^\s[PV]+\w+[-]+\w+\s/g);
      // // vtmsPaymentDetail.paymentNo().contains(regex);
      // vtmsPaymentDetail.paymentNo().should("include.text", "PV");
      // // vtmsPaymentDetail.amount().should("include.text", TEST_DATA_PAYMENT.valueAmt);

      cy.end();
    });
    it("test_payment", () => {
      vtmsLogin.userName().type("vtms_ucars");
      cy.wait(1000);
      vtmsLogin.password().type("Ucars@123");
      cy.wait(1000);
      vtmsLogin.login().click();
      cy.wait(1000);
      vtmsMainPage.transactionComp().should("be.visible");
      vtmsMainPage.transactionComp().click();
      cy.wait(1000);
      if (vtmsMainPage.transPayment()) {
        vtmsMainPage.transPayment().click();
        vtmsPaymentPage.addNewBtn().should("be.visible");
        vtmsPaymentPage.addNewBtn().click();
        selectDropDown("payment_type", TEST_DATA_PAYMENT.payment_type);
        vtmsAddnewPage.paymentDate().type(TEST_DATA_PAYMENT.date);
        selectDropDown("cont_name", TEST_DATA_PAYMENT.cont_name);
        selectDropDown("subcode", TEST_DATA_PAYMENT.sub_code);
        vtmsAddnewPage.valueAmt().type(TEST_DATA_PAYMENT.valueAmt);
        vtmsAddnewPage.savePaymentBtn().click();
      }
      cy.wait(1000);
      vtmsPaymentDetail.paymentNo().should("be.visible");
      // const regex: RegExp = new RegExp(/^\s[PV]+\w+[-]+\w+\s/g);
      // vtmsPaymentDetail.paymentNo().contains(regex);
      vtmsPaymentDetail.paymentNo().should("include.text", "PV");
      // vtmsPaymentDetail.amount().should("include.text", TEST_DATA_PAYMENT.valueAmt);

      cy.end();
    });
  });
});

function selectDropDown(formControlName, selectOption) {
  cy.get(`[formcontrolname="${formControlName}"]`)
    .click()
    .then(() => {
      cy.get(
        `.cdk-overlay-container .ant-select-item .ant-select-item-option-content`
      ).should("contain", selectOption);
      cy.get(
        `.cdk-overlay-container .ant-select-item .ant-select-item-option-content:contains("${selectOption}")`
      )
        .first()
        .click()
        .then(() => {
          cy.get(`[formcontrolname="${formControlName}"]`).contains(
            selectOption
          );
        });
    });
}
