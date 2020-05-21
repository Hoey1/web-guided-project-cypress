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
      .should('have.value', 'Instructor')
  })

  it('submit button not disabled any more', () => {
    cy.get('button.submit')
      .should('not.be.disabled')
  })
})

describe('Form validation', () => {
  it('validates username correctly', () => {
    // navigating to the site again
    // assert that there are no validation error to start with
    // type a single char in the username input
    // assert there IS a validation error
    cy.visit('http://localhost:1234')
    cy.contains('Username required').should('not.exist')
    cy.get('input[name="username"]').type('a')
    cy.contains('Username required')
    // type another char in the username input
    // assert there still IS a validation error
    // type a third char
    // assert the error is gone
    cy.get('input[name="username"]').type('b')
    cy.contains("Username required").should('exist')

    cy.get('input[name="username"]').type('c')
    cy.contains("Username required").should('not.exist')
  })
})

describe('Submitting and deleting friends', () => {
  it('can submit and delete a friend', () => {
    // navigate the site again
    // fill out form
    // submit form by hitting submit buttob
    // assert the new friend is there
    cy.visit('http://localhost:1234')
    cy.get('input[name="username"]').type('Barbara')
    cy.get('input[name="email"]').type('barbara@barbara.com')
    cy.get('select[name="role"]').select('TL')
    cy.get('button.submit').click()

    // checking whether h2 exists with 'Barbara' content
    cy.get('.friend h2').contains('Barbara')

    // hit delete on new friend
    cy.get('.friend h2').contains('Barbara')
      .next().next().next()
      .click()
    // assert new friend is gone
    cy.get('.friend h2').contains('Barbara').should('not.exist')
  })
})
