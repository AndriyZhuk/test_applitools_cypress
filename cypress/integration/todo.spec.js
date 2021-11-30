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
  testName: "Pillars edit popup test",
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
    cy.visit("https://community.ethic.com/hub/profile");
    cy.contains("hub-profile-pillars-card button", "Edit").click();
    cy.wait(3000); // for eyes stability
    cy.get(".edit-popup").should("be.visible");

    cy.eyesCheckWindow({
      tag: "screenshot of pillars edit popup",
      target: "region",
      selector: ".edit-popup",
    });

    cy.wait(3000); // for eyes stability
    cy.contains("button", "Cancel").invoke("show", { force: true }).click();
  });
});
