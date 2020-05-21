describe('Form inputs', () => {
  it('can navigate to the site', () => {
    cy.visit('http://localhost:1234')
    cy.url().should('include', 'localhost')
  })

  it('button is disabled', () => {
    cy.get('button.submit')
      .should('be.disabled')
  })

  it('can type a username', () => {
    cy.get('input[name="username"]')
      .type('Lady Gaga')
      .should('have.value', 'Lady Gaga')
  })

  it('can type an email', () => {
    cy.get('input[name="email"]')
      .type('lady@gaga.com')
      .should('have.value', 'lady@gaga.com')
  })

  it('can select a role', () => {
    cy.get('select[name="role"]')
      .select('Instructor')
  })

  it('submit button not disabled any more', () => {
    cy.get('button.submit')
      .should('not.be.disabled')
  })
})

describe('Form validation', () => {

})

describe('Submitting and deleting friends', () => {

})
