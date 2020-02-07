describe('Teams - Manage teams', function () {
  it('should display a blank state', function () {
    cy.login()

    cy.createCompany()

    // access the team link in the header
    cy.get('[data-cy=header-teams-link').click()

    // it should see the teams page
    cy.url().should('include', '/1/teams')
    cy.contains('Teams are a great way')
  })

  it('should display the team in a list', function () {
    cy.login()

    cy.createCompany()

    cy.createTeam('product')
    cy.assignEmployeeToTeam(1, 1)

    // access the team link in the header
    cy.get('[data-cy=header-teams-link').click()

    // it should see the teams page
    cy.url().should('include', '/1/teams')
    cy.contains('product')
  })

  it('should let rename a team by an administrator', function () {
    cy.login()

    cy.createCompany()

    cy.createTeam('product')
    cy.assignEmployeeToTeam(1, 1)

    // access the team link in the header
    cy.get('[data-cy=header-teams-link').click()

    // it should see the teams page
    cy.url().should('include', '/1/teams')
    cy.contains('product')
  })
})
