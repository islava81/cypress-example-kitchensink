/// <reference types="cypress" />

// const { createArrayLiteral } = require('typescript')

describe('Kitchen Sink Initial Testing', () => {
  it('first test', () => {
    cy.visit('http://localhost:8080')

    //cy.get('class="row"')
    cy.contains('Querying').click({ force: true })
    cy.get('[class="container"]').should('contain', 'Querying')
  })

  it('validate header buttons', () => {
    cy.get('[class="navbar navbar-inverse"]').within(() => {
      cy.get('[class="navbar-header"]').within(() => {
        cy.get('.navbar-brand').should('have.attr', 'href')
      })

      cy.get('[class="active"]').should('have.class', 'active').and('contain', 'Commands')

      cy.get('[class="nav navbar-nav"]').within(() => {
        cy.get('[href="/utilities"]').should('contain', 'Utilities')
      })

      cy.get('[class="nav navbar-nav"]').within(() => {
        cy.get('[href="/cypress-api"]').should('contain', 'Cypress API')
      })

      cy.get('[class="nav navbar-nav pull-right"]').within(() => {
        cy.get('[href]').should('contain', 'GitHub')
      })
    })
  })

  it('check navigation of header buttons and dropdowns', () => {
    cy.get('[class="navbar-brand"]').click()
    cy.get('[class="container"]').should('contain', 'Kitchen Sink')

    cy.get('[class="dropdown"]').click()

    // cy.get('[class="dropdown open"]').then((dropdown) => {
    //   cy.get('.dropdown-menu').each((listItem, index) => {
    //     const itemText = listItem.text().trim()
    //     const listValues = [
    //       { text: 'Querying' },
    //       { text: 'Traversal' },
    //       { text: 'Actions' },
    //       { text: 'Window' },
    //       { text: 'Viewport' },
    //       { text: 'Location' },
    //       { text: 'Navigation' },
    //       { text: 'Assertions' },
    //       { text: 'Misc' },
    //       { text: 'Connectors' },
    //       { text: 'Aliasing' },
    //       { text: 'Waiting' },
    //       { text: 'Network Requests' },
    //       { text: 'Files' },
    //       { text: 'Local Storage' },
    //       { text: 'Cookies' },
    //       { text: 'Spies, Stubs & Clocks' },
    //     ]
    //     //cy.wrap(dropdown).should('contain', listValues)
    //   })
  })

  // cy.get('[class="dropdown-menu"]').find('li').then($li => {
  //     cy.log($li)
  // })

  // cy.get('[class="dropdown open"]').then( dropdownOptions => {

  //    const listValues = [
  //     {text: 'Querying'},
  //     {text: 'Traversal'},
  //     {text: 'Actions'}
  //    ]

  //    const getText = el => el.textContent.trim()

  //    it('should have expected values', () => {
  //     cy.get('[class="dropdown-menu"]').then(els => {
  //         const optionTexts = [...els].map(getText)
  //         expect(optionTexts).to.deep.eq(listValues.map(x => x.text))
  //     })

  //    })

  // })

  // cy.get('[class="dropdown open"]').within( () => {
  //     const listValues = [
  //         {text: 'Querying'},
  //         {text: 'Traversal'},
  //         {text: 'Actions'},
  //         {text: "Window"},
  //         {text: "Viewport"},
  //         {text: "Location"},
  //         {text: "Navigation"},
  //         {text: "Assertions"},
  //         {text: "Misc"},
  //         {text: "Connectors"},
  //         {text: "Aliasing"},
  //         {text: "Waiting"},
  //         {text: "Network Requests"},
  //         {text: "Files"},
  //         {text: "Local Storage"},
  //         {text: "Cookies"},
  //         {text: "Spies, Stubs & Clocks"}
  //     ]
  //     cy.wrap('[class="dropdown-menu"]').should('have.value', listValues)
  // })

  //})

  it('validate subtitles in Cypress API screen', () => {
    cy.contains('Cypress API').click({ force: true })
    cy.get('[class="col-xs-12"] [id="version"]').should('contain', 'Cypress.version')
  })
})
