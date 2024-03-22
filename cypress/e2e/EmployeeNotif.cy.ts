describe('EmployeeNotif Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/EmployeeNotif/')
  });
  it('contains a table element for tasks', () => {
    cy.get('.max-w-4xl').should('exist');
    //cy.get('tbody > :nth-child(1) > .w-1\/4').should('exist');
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('exist');
    cy.get('tbody > :nth-child(1) > :nth-child(3)').should('exist');
    //cy.get('tbody > :nth-child(1) > .w-2\/5').should('exist');
    //cy.get(':nth-child(2) > .w-1\/4').should('exist');
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('exist');
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should('exist');
    //cy.get(':nth-child(2) > .w-2\/5').should('exist');
    //cy.get(':nth-child(3) > .w-1\/4').should('exist');
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should('exist');
    cy.get(':nth-child(3) > :nth-child(3)').should('exist');
    //cy.get(':nth-child(3) > .w-2\/5').should('exist');
    //cy.get(':nth-child(4) > .w-1\/4').should('exist');
    cy.get(':nth-child(4) > :nth-child(2)').should('exist');
    cy.get(':nth-child(4) > :nth-child(3)').should('exist');
    //cy.get(':nth-child(4) > .w-2\/5').should('exist');
    //cy.get(':nth-child(5) > .w-1\/4').should('exist');
    cy.get(':nth-child(5) > :nth-child(2)')
    cy.get(':nth-child(5) > :nth-child(3)')
    // /cy.get(':nth-child(5) > .w-2\/5').should('exist');
    //cy.get(':nth-child(6) > .w-1\/4');
    cy.get(':nth-child(6) > :nth-child(2)');
    cy.get(':nth-child(6) > :nth-child(3)');
    //cy.get(':nth-child(6) > .w-2\/5');
    //cy.get(':nth-child(7) > .w-1\/4').should('exist');
    cy.get(':nth-child(7) > :nth-child(2)').should('exist');
    cy.get(':nth-child(7) > :nth-child(3)').should('exist');
    //cy.get(':nth-child(7) > .w-2\/5').should('exist');
  });

  it('contains a navigation bar', () => {
    cy.get('#navbarMain').should('exist');
  });

   it('navigates to the Condo Owner Dashboard when the Owner Dashboard button is clicked', () => {
    cy.get('#ownerDashboardBtn').should('exist').click();
    cy.url().should('eq', 'http://localhost:3000/CondoOwnerDashboard');
  });

  it('navigates to the SignIn page when the Login button is clicked', () => {
    cy.get('#loginBtn').should('exist').click();
    cy.url().should('eq', 'http://localhost:3000/SignIn');
  });

  it('navigates to the SignUp page when the Signup button is clicked', () => {
    cy.get('#signupBtn').should('exist').click();
    cy.url().should('eq', 'http://localhost:3000/SignUp');
  });

  it('can scroll through the task list', () => {
    cy.get('.max-h-96').scrollTo('bottom');
  });
  
});

