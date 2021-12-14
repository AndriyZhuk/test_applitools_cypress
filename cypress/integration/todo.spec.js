// write your credentials here
const email = "";
const password = "";

const browsers = [
  {
    iosDeviceInfo: {
      deviceName: 'iPhone 11 Pro',
      screenOrientation: 'portrait',
      iosVersion: 'latest-1',
    },
  },
  {
    iosDeviceInfo: {
      deviceName: 'iPhone 8',
      screenOrientation: 'portrait',
      iosVersion: 'latest-1',
    },
  },
  { width: 375, height: 667, name: 'chrome' },
  { width: 1400, height: 1000, name: 'firefox' },
  { width: 1400, height: 1000, name: 'safari' },
];

const eyesOpenOptions = {
  appName: "Community hub",
  batchName: "Community hub",
  notifyOnCompletion: true,
  testName: "Edit interest level popup test",
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
    cy.get('[data-cy="impactsInterestLevel"] button')
      .invoke("show", { force: true })
      .click({ force: true });
    cy.get(".hub-edit-profile-popup hub-areas-editor").should("be.visible");

    cy.wait(3000); // for eyes stability

    cy.eyesCheckWindow({
      tag: "screenshot of interest level popup",
      ignore: [
        {
          type: "css",
          selector: "video",
        },
        {
          type: "css",
          selector: "hub-profile-video",
        },
      ],
      content: [
        {
          type: "css",
          selector: ".slogan",
        },
      ],
      layout: [
        {
          type: "css",
          selector: ".footer-text",
        },
        {
          type: "css",
          selector: '[data-cy="ignoringNumberForApplitools"]',
        },
      ],
      target: "window",
      fully: false,
    });

    cy.wait(3000); // for eyes stability
  });
});
