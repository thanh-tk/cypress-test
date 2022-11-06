import { inputItem } from "cypress/models/@type";
import { WAIT_TIME, WAIT_TIME_SKIP } from "../constants";

// Navigation in sideBar
export function navigationPerdefined(
  navStep: Cypress.Chainable<JQuery<HTMLElement>>[]
) {
  navStep.forEach((element) => {
    cy.wait(WAIT_TIME);
    element.should("be.visible").click();
  });
}

export function inputAutoFill(dataTest: inputItem[]) {
  dataTest.forEach((input, _) => {
    cy.wait(WAIT_TIME_SKIP);
    // const keyofInput = getInputKeyByValue(input, input.value);
    if (input.type === "dropdown") {
      selectDropDown(input.key, input.value);
    } else {
      const inputEle = getFormControl(input.key);
      inputEle.then((inpuEle) => {
        if (inpuEle.length > 1) {
          inputEle.last().should("not.be.disabled").type(input.value);
          return;
        }
        inputEle.first().should("not.be.disabled").type(input.value);
        return;
      });
    }
  });
}

export function checkDataByID(id: string, testData: inputItem[]) {
  const testObj = testData.find((data) => data.key === id);
  cy.get(`#${id}`).first().should("include.text", testObj?.value);
}

export const getFormControl = (searchStr: string) => {
  return cy.get(`[formcontrolname="${searchStr}"]`);
};

export function selectDropDown(formControlName: string, selectOption: string) {
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
