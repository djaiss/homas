var faker = require('faker');

// Create a user
Cypress.Commands.add('login', (callback) => {
  cy.exec('php artisan setup:frontendtestuser').then((result) => {
    cy.visit('/_dusk/login/'+result.stdout+'/');
    cy.visit('/home')
    if (callback !== undefined) {
      callback(result.stdout)
    }
  })
});

Cypress.Commands.add('loginLegacy', (role) => {
  cy.exec('php artisan setup:frontendtesting -vvv')

  cy.visit('/login')

  cy.get('input[name=email]').type('admin@admin.com')
  cy.get('input[name=password]').type('admin')

  cy.get('button[type=submit]').click()

  cy.wait(1000)

  cy.url().should('include', '/home')
})

Cypress.Commands.add('logout', () => {
  cy.get('[data-cy=header-menu]').click()
  cy.get('[data-cy=logout-button]').click()
})

// Create a company called "Dunder Mifflin"
Cypress.Commands.add('createCompany', (callback) => {
  cy.get('[data-cy=create-company-blank-state]').click()

  cy.url().should('include', '/company/create')

  cy.get('input[name=name]').type(faker.company.companyName())
  cy.get('[data-cy=create-company-submit]').click()

  cy.get('[data-cy=company-welcome]', { timeout: 6000 }).should('be.visible')
  .invoke('attr', 'data-cy-item').then(function (companyId) {
    if (callback !== undefined) {
      callback(companyId)
    }
  })
})

// Create a team
Cypress.Commands.add('createTeam', (productName) => {
  cy.get('[data-cy=header-adminland-link]').click()

  cy.get('[data-cy=team-admin-link]').click()
  cy.get('[data-cy=add-team-button]').click()

  cy.get('input[name=name]').type(productName)

  cy.get('[data-cy=submit-add-team-button]').click()
})

// Create an employee status
Cypress.Commands.add('createEmployeeStatus', (status) => {
  cy.get('[data-cy=header-adminland-link]').click()

  cy.get('[data-cy=employee-statuses-admin-link]').click()
  cy.get('[data-cy=add-status-button]').click()

  cy.get('[data-cy=add-title-input]').type(status)

  cy.get('[data-cy=modal-add-cta]').click()
})

// Create an employee
Cypress.Commands.add('createEmployee', (firstname, lastname, email, permission, sendEmail) => {
  cy.get('[data-cy=header-adminland-link]').click()

  cy.get('[data-cy=employee-admin-link]').click()
  cy.url().should('include', '/account/employees')

  cy.get('[data-cy=add-employee-button]').click()

  cy.get('input[name=first_name]').type(firstname)
  cy.get('input[name=last_name]').type(lastname)
  cy.get('input[name=email]').type(email)

  switch (permission) {
    case 'admin':
      cy.get('[type="radio"]').first().check()
      break;
    case 'hr':
      cy.get('[type="radio"]').check(['200'])
      break;
    case 'user':
      cy.get('[type="radio"]').check(['300'])
      break;
  }

  if (sendEmail === true) {
    cy.get('[data-cy=send-email]').check()
  }

  cy.get('[data-cy=submit-add-employee-button]').click()
})

// Finalize account creation and go to the dashboard
Cypress.Commands.add('acceptInvitationLinkAndGoToDashboard', (password, link) => {
  cy.logout()
  cy.visit('/invite/employee/' + link)
  cy.get('[data-cy=accept-create-account]').click()
  cy.get('input[name=password]').type(password)
  cy.get('[data-cy=create-cta]').click()
  cy.get('[data-cy=company-1]').click()
})

// Assert that the page can be visited by a user with the right permission level
Cypress.Commands.add('canAccess', (url, permission, textToSee, userId = 1) => {
  cy.changePermission(userId, permission)
  cy.visit(url)
  cy.contains(textToSee)
})

// Assert that a page can not be visited
Cypress.Commands.add('canNotAccess', (url, permission, userId = 1) => {
  cy.changePermission(userId, permission)
  cy.request({
    url: url,
    failOnStatusCode: false
  })
    .then((resp) => {
      expect(resp.status).to.eq(401)
    })
})

// Assert that an audit log has been created with the following content
// and redirect the page to the given url
Cypress.Commands.add('hasAuditLog', (content, redirectUrl, companyId = 1) => {
  cy.visit('/'+companyId+'/account/audit')
  cy.contains(content)
  cy.visit(redirectUrl)
})

// Assert that an employee log has been created with the following content
// and redirect the page to the given url
Cypress.Commands.add('hasEmployeeLog', (content, redirectUrl, visitUrl = '', companyId = 1, userId = 1) => {
  if (visitUrl != '') {
    cy.visit(visitUrl)
  } else {
    cy.visit('/'+companyId+'/employees/'+userId+'/logs')
  }

  cy.contains(content)

  cy.visit(redirectUrl)
})

// Assert that a team log has been created with the following content
// and redirect the page to the given url
Cypress.Commands.add('hasTeamLog', (content, redirectUrl, companyId = 1, userId = 1) => {
  cy.visit('/'+companyId+'/account/teams/'+userId+'/logs')

  cy.contains(content)

  cy.visit(redirectUrl)
})

// Assert that the employee has a notification
Cypress.Commands.add('hasNotification', (content, companyId = 1) => {
  cy.visit('/'+companyId+'/notifications')
  cy.contains(content)
})

// Assign the employee as the manager
Cypress.Commands.add('assignManager', (name) => {
  cy.get('[data-cy=add-hierarchy-button]').click()
  cy.get('[data-cy=add-manager-button]').click()
  cy.get('[data-cy=search-manager]').type(name)
  cy.get('[data-cy=potential-manager-button').click()
})

// Give the accountant right to the employee
Cypress.Commands.add('grantAccountantRight', (name, employeeNumber) => {
  cy.get('[data-cy=header-adminland-link]').click()
  cy.get('[data-cy=expenses-admin-link]').click()
  cy.get('[data-cy=show-edit-mode]').click()
  cy.get('[data-cy=hide-edit-mode]').click()
  cy.get('[data-cy=show-edit-mode]').click()
  cy.get('[data-cy=potential-employees]').type(name)
  cy.get('[data-cy=employee-id-' + employeeNumber + '-add]').click()
  cy.get('[data-cy=hide-edit-mode]').click()
})

// Change persmission of the user
Cypress.Commands.add('changePermission', (userId, permission) => {
  cy.exec('php artisan test:changepermission --user=' + userId + ' --permission=' + permission)
})

// Assign an employee to a team
Cypress.Commands.add('assignEmployeeToTeam', (employeeId, teamId, companyId = 1) => {
  cy.visit('/'+companyId+'/employees/'+employeeId)

  // Open the modal to assign a team and select the first line
  cy.get('[data-cy=open-team-modal-blank]').click()
  cy.get('[data-cy=list-team-' + teamId + ']').click()
  cy.get('.existing-teams').contains('product')
})

// Create a recent ship entry
Cypress.Commands.add('createRecentShip', (featureName, description = '', name = '', employeePosition = 0) => {
  // create an entry with title+description+employees
  cy.get('[data-cy=add-recent-ship-entry]').click()
  cy.get('[data-cy=recent-ship-title-input').type(featureName)

  if (description != '') {
    cy.get('[data-cy=ship-add-description]').click()
    cy.get('[data-cy=ship-description]').type(description)
  }

  if (name != '') {
    cy.get('[data-cy=ship-add-employees]').click()
    cy.get('[data-cy=ship-employees]').type(name)
    cy.get('[data-cy=employee-id-' + employeePosition + ']', { timeout: 600 }).should('be.visible').click()
  }

  cy.get('[data-cy=submit-add-ship-button]').click()
})

// Check that the recent ship entry exists
Cypress.Commands.add('readRecentShipEntry', (title, description, employeeName, employeeId) => {
  cy.get('[data-cy=recent-ship-title]').contains(title)
  cy.get('[data-cy=recent-ship-description]').contains(description)
  cy.get('[data-cy=ship-list-employee-' + employeeId + ']').contains(employeeName)
})

// Create an expense
Cypress.Commands.add('createExpense', (title, amount, companyId = 1) => {
  cy.visit('/'+companyId+'/dashboard')
  cy.get('[data-cy=create-expense-cta]').click()
  cy.get('[data-cy=expense-create-cancel]').click()
  cy.get('[data-cy=create-expense-cta]').click()
  cy.get('[data-cy=expense-amount]').type(amount)
  cy.get('[data-cy=expense-currency]').click()
  cy.get('ul.vs__dropdown-menu>li').eq(4).click()
  cy.get('[data-cy=expense-currency]').click()
  cy.get('[data-cy=expense-title]').type(title)
  cy.get('[data-cy=submit-expense]').click()
})
