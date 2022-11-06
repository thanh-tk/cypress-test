export class SideBar {
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
