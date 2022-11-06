import { LoginPage } from "cypress/e2e/class/login";
import { SideBar } from "cypress/e2e/class/nav-bar";
import { TEST_URL } from "cypress/e2e/constants";
import { loginStep } from "./login.runner";

describe("LOGIN SUITE", () => {
  const loginPage = new LoginPage();
  const sideBar = new SideBar();

  context("Login", () => {
    it("should login success", () => {
      // cy.intercept(TEST_URL + '/dashboard').as('dashboard');
      
      loginStep(loginPage);
      cy.wait(5000).get(".company_name").should("be.visible");
      // cy.wait("@dashboard",).then((interception) => {
      //   cy.get(".company_name").wait(5000).should("be.visible");
      // });
    });
  });

  // context("API Test", () => {
  //   let id: string;
  //   let no = 0;
  //   it("Should have default Data is an arrray", () => {
  //     cy.visit(API_URL, { failOnStatusCode: false });
  //     cy.request(API_URL + "todos/").then((respone) => {
  //       assert.isArray(respone.body);
  //       no = respone.body.length;
  //     });
  //   });
  //   it("Should have 1 additional Data After add", () => {
  //     cy.visit(API_URL, { failOnStatusCode: false });
  //     cy.request("POST", API_URL + "todos/", { task: "run tests" }).then(
  //       (resp: any) => {
  //         id = resp.body["_id"];
  //       }
  //     );
  //     cy.request(API_URL + "todos/").then((respone) => {
  //       cy.wrap(respone.body).should("have.length", no + 1);
  //     });
  //     cy.pause();
  //   });
  //   it("deletes Todo items - DELETE", () => {
  //     cy.request("DELETE", API_URL + `todos/${id}`)
  //     .as("todoRequest")
  //     .then((response) => {
  //       expect(response.status).to.eq(200);
  //       assert.isString(response.body, "todo deleted!");
  //     });
  //     cy.visit(API_URL, { failOnStatusCode: false });
  //     cy.pause();
  //   });
  // });
});
