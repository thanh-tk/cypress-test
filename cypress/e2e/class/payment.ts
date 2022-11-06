export class PaymentPage {
  addNewBtn() {
    return cy.get('button[name="addPaymentBtn"]').first();
  }
}

export class NewPaymentPage {
  savePaymentBtn() {
    return cy.get('button[id="save-payment-btn"]').first();
  }
  paymentType() {
    return cy.get(`[formcontrolname="payment_type"]`).first();
  }
  paymentDate() {
    return cy.get(`[formcontrolname="payment_date"]`).first();
  }
  contname() {
    return cy.get(`[formcontrolname="cont_name"]`).first();
  }
  subCode() {
    return cy.get(`[formcontrolname="subcode"]`).first();
  }
  valueAmt() {
    return cy.get(`[formcontrolname="value_original"]`).last();
  }

  overlayCdk() {
    return cy.get(".cdk-overlay-container");
  }
}

export class PaymentDetailsPage {
  paymentNo() {
    return cy.get("#payment-no").first();
  }
  amount() {
    return cy.get("#value_original").first();
  }
}
