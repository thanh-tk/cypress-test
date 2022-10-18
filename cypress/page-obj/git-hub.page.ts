/// <reference types="cypress" />
export class gitHubLogin {
  menuBtn() {
    return cy.get(".Button--link").first();
  }
  loginInBtn() {
    return cy.get(".HeaderMenu-link--sign-in").first();
  }
  userName() {
    return cy.get('input[name="login"]').first();
  }
  password() {
    return cy.get('input[name="password"]').first();
  }
  signInbtn() {
    return cy.get('input[name="commit"]').first();
  }
  repoList() {
    return cy.get(".js-repos-container").first();
  }
  // googleSearch() {
  //   return cy.get('input[name="q"]').first();
  // }
  // googleSearchBtn() {
  //   return cy.get('input[name="btnK"]').first();
  // }
  // searchResults() {
  //   return cy.get("h3").first();
}

