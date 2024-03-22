describe('PortalEvent Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/PortalEvent/')
  })
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

  it('fills up the Create Event form', () => {
    cy.get('input[placeholder="Event Title"]').type('Board Meeting');

    // Open the Select Attendees list
    cy.get('.relative > .py-2').click();

    // Select attendees by clicking on their name or associated checkbox
    // Replace '.attendee-name' with the actual selector for your checkboxes
    // Optionally, close the Select Attendees list
    cy.contains('Alex Johnson').click();
    cy.contains('Jordan Leigh').click();
    cy.get('.relative > .py-2').click(); 

    cy.get('input[placeholder="Location"]').type('Conference Room A');
    cy.get('textarea[placeholder="Type details for this new meeting"]').type('Discussing the upcoming project milestones.');
  });

})