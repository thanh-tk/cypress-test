export class vtms_login {
  userName() {
    return cy.get('input[id="username"]').first();
  }
  password() {
    return cy.get('input[id="password"]').first();
  }
  login() {
    return cy.get('input[name="login"]').first();
  }
}

export class vtms_mainPage {
  transactionComp() {
    return cy.get("#transaction").first();
  }
  transPayment() {
    return cy.get("#payment").first();
  }
  dashboard() {
    return cy.get("#dashboard").first();
  }
}
export class vtms_PaymentPage {
  addNewBtn() {
    return cy.get('button[name="addPaymentBtn"]').first();
  }
}

export class newPaymentPage {
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
    return cy.get('.cdk-overlay-container');
  }
}

export class paymentDetail {
  paymentNo () {
    return cy.get("#payment-no").first();
  }
  amount () {
    return cy.get("#value_original").first();
  }
}
