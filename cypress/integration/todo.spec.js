// write your credentials here
const email = "";
const password = "";

const browsers = [
  {
    iosDeviceInfo: {
      deviceName: "iPhone 11",
      screenOrientation: "portrait",
      iosVersion: "latest",
    },
  },
  {
    iosDeviceInfo: {
      deviceName: "iPhone 7",
      screenOrientation: "portrait",
      iosVersion: "latest",
    },
  },
  { width: 375, height: 667, name: "chrome" },
  { width: 1400, height: 1000, name: "safari" },
  { width: 1400, height: 1000, name: "edgechromium" },
];

const eyesOpenOptions = {
  appName: "Community hub",
  batchName: "Community hub",
  notifyOnCompletion: true,
  testName: "Next page test",
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

  it("make screenshot of what`s New page", () => {
    cy.visit("https://community.ethic.com/hub/next");

    cy.wait(3000);
    cy.eyesCheckWindow({
      tag: "screenshot of What`s Next",
      ignore: [
        {
          type: "css",
          selector: "video",
        },
        {
          type: "css",
          selector: ".welcome-image",
        },
      ],
      content: [
        {
          type: "css",
          selector: ".top .title",
        },
        {
          type: "css",
          selector: ".top-bar-container",
        },
        {
          type: "css",
          selector: ".promotion-block-icon img",
        },
      ],
      target: "window",
      fully: true,
    });
    cy.wait(5000);
  });
});
