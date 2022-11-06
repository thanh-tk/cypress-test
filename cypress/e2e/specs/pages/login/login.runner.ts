import { LoginPage } from "cypress/e2e/class/login";
import { LOGIN_DATA, TEST_URL, WAIT_TIME, WAIT_TIME_SKIP } from "cypress/e2e/constants";

//#region PUBLIC_FUNCTIONS
export function loginStep(loginPage: LoginPage) {
  cy.visit(TEST_URL);
  loginPage.userName().type(LOGIN_DATA.username);
  loginPage.password().type(LOGIN_DATA.password);
  loginPage.login().click();
}
//#endregion PUBLIC_FUNCTIONS

//#region PRIVATE_FUNCTIONS

//#endregion PRIVATE_FUNCTIONS
