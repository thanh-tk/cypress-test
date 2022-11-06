export class LoginPage {
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

