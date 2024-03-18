describe('creating & login account Testing', () => {
 it('navigate to Sign Up page', () => {
    cy.visit('http://localhost:3000')
    cy.wait(1000)
    cy.get('#signupBtn').should('exist').click()
    cy.contains("Sign Up").should('exist')
  })
  it('Creating dummy account', () => {
    cy.visit('http://localhost:3000/SignUp')
    //Typing into field
    cy.get(':nth-child(1) > .w-full').should('exist').type('test3')
    cy.get('.bg-stone > :nth-child(2) > .w-full').should('exist').type('test3')
    cy.get('.bg-stone > :nth-child(3) > .w-full').should('exist').type('testyy')
    cy.get(':nth-child(5) > .w-full').should('exist').type('2000/01/01')
    cy.get(':nth-child(4) > .w-full').should('exist').type('test3 st')
    cy.get(':nth-child(6) > .w-full').should('exist').type('4380000000')
    cy.get(':nth-child(7) > .w-full').should('exist').type('testy3@gmail.com')
    cy.get('#Password').should('exist').type('test3')
    cy.get('#Confirmpass').should('exist').type('test3')
    cy.get(':nth-child(10) > .w-full').click()
  })
  it('log in to dummy account', () => {
    cy.visit('http://localhost:3000/SignIn')
    //Typing into field
    cy.get('.max-w-xs > :nth-child(1) > .w-full').should('exist').type('testy@gmail.com')
    cy.get('.max-w-xs > :nth-child(2) > .w-full').should('exist').type('testy123')
    cy.get('.mb-6 > .w-full').click()
    cy.get('a > #loginBtn').contains('User Profile')
  })
})