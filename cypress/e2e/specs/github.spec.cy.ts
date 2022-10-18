import { gitHubLogin } from "../../page-obj/git-hub.page";

describe("GitHUb Navigation", () => {
  const login = new gitHubLogin();
  it("spass", () => {
    cy.visit("https://www.github.com");
    cy.wait(1000);
    if(login.loginInBtn) {
      login.loginInBtn().click({ force: true });
    } else {
      login.menuBtn().click({ force: true });
    }
    cy.wait(1000);
    login.userName().type("thaikimthanh96@gmail.com");
    login.password().type("tanacondat2102");
    login.signInbtn().click();
    cy.wait(2000);
    login.repoList().should("be.visible");
    cy.end();
  });
});
