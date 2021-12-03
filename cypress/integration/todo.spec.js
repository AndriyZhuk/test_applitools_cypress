// write your credentials here
const email = "";
const password = "";

const browsers = [
  {
    iosDeviceInfo: {
      deviceName: "iPhone 11 Pro",
      screenOrientation: "portrait",
      iosVersion: "latest",
    },
  },
  { width: 475, height: 667, name: "chrome" },
];

const eyesOpenOptions = {
  appName: "Community hub",
  batchName: "Community hub",
  notifyOnCompletion: true,
  testName: "Account delete popup test",
};

describe("Visual Validation Applitools", () => {
  before(function () {
    cy.clearCookies();
    cy.visit("https://community.ethic.com/");

    cy.eyesOpen({ ...eyesOpenOptions, browser: browsers });
  });

  after(() => {
    cy.eyesClose();
  });

  it("Login to dashboard", () => {
    cy.wait(3000);
    cy.get('[data-cy="user-email"]').type(email);
    cy.get('[data-cy="current-password"]').type(password);
    cy.get('[data-cy="sign-in-btn"]').click();
    cy.wait(3000);
  });

  it("make screenshot of ", () => {
    cy.visit("https://community.ethic.com/hub/settings");
    cy.contains(".link-text", "Delete account").click();
    cy.wait(3000); // for eyes stability
    cy.get("mat-dialog-container").should("be.visible");

    cy.eyesCheckWindow({
      tag: "screenshot of Delete my account dialog",
      target: "window",
      fully: false,
    });

    cy.wait(3000); // for eyes stability
  });
});
