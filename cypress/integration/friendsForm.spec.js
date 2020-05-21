describe('Form inputs', () => {
  it('can navigate to the site', () => {
    cy.visit('http://localhost:1234')
    cy.url().should('include', 'localhost')
  })

  it('button is disabled', () => {
    cy.get('button.submit')
      .should('be.disabled')
  })
})

describe('Form validation', () => {
  
})

describe('Submitting and deleting friends', () => {
  
})
