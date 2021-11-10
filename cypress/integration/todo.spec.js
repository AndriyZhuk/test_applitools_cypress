// write your credentials here
const email = '';
const password = '';

describe('Visual Validation Applitools', () => {

  before(function () {
    cy.visit('https://community.ethic.com/');
  });

  it('Login to dashboard', () => {
    cy.wait(3000);
    cy.get('[data-cy="user-email"]').type(email);
    cy.get('[data-cy="current-password"]').type(password);
    cy.get('[data-cy="sign-in-btn"]').click();
    cy.wait(5000);
  })

  it('make screenshot of what`s New page', () => {
    cy.visit('https://community.ethic.com/hub/next')
    cy.wait(3000);

    cy.wait(5000);
  })

});
