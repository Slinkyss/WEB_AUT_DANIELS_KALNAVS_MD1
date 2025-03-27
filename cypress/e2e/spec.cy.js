const { BasePage } = require("../../pageObjects/BasePage");
const { selectable } = require("../../pageObjects/selectable")

describe("Grid md", () => {
  context("Without auto login", () => {
    beforeEach(() => {
     BasePage.visit();
    });

    it.only('Grid check', () => {

      selectable.gridClick.click();
      //Uzspiežu pogas
      selectable.gridButtonTwo.click();
      selectable.gridButtonFour.click();
      selectable.gridButtonSix.click();
      selectable.gridButtonEight.click();

     //validation

     selectable.gridButtonTwo.should("contain.class", "active");
     selectable.gridButtonFour.should("contain.class", "active");
     selectable.gridButtonSix.should("contain.class", "active");
     selectable.gridButtonEight.should("contain.class", "active");
        //validation neaktivjaiem. 
     selectable.gridButtonOne.should("not.have.class", "class");
     selectable.gridButtonThree.should("not.have.class", "class");
     selectable.gridButtonFive.should("not.have.class", "class");
     selectable.gridButtonSeven.should("not.have.class", "class");
     selectable.gridButtonNine.should("not.have.class", "class");
    });
  });
});