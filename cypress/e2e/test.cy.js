/// <reference types="cypress" />
const data = require('../fixtures/example.json');
//import data from ('./fixtures/example.json')
describe('The Star Wars Search scenarios', () => {
  beforeEach(function () {
    cy.visit(data.url);
    cy.get('body > app-root > div > div > div > h1').should('have.text', 'The Star Wars Search')
  })
  it('Verify when user searches for a valid character', () => {
    cy.get('#query').type('Luke Skywalker')
    cy.get('button.btn-primary').click()
    cy.get('h6.card-subtitle').should('have.text', 'Luke Skywalker')
    cy.get('.row').eq(1).should('have.text', 'Gender: male ')
    cy.get('.row').eq(2).should('have.text', 'Birth year: 19BBY ')
    cy.get('.row').eq(3).should('have.text', 'Eye color: blue ')
    cy.get('.row').eq(4).should('have.text', 'Skin color: fair ')
  })
  /*
  it('Verify when user searches for an invalid character', () => {
    cy.get('#query').type('Luke test')
    cy.get('button.btn-primary').click()
    cy.get('body > app-root > div > div > div > div:nth-child(5)').should('have.text', 'Not found.')
  })
  it('Verify when user searches for a valid planet', () => {
    cy.get('#planets').click()
    cy.get('#query').type('Tatooine')
    cy.get('button.btn-primary').click()
    cy.get('.card-subtitle').should('have.text', 'Tatooine')
    cy.get('.row').eq(1).should('have.text', 'Population: 200000 ')
    cy.get('.row').eq(2).should('have.text', 'Climate: arid ')
    cy.get('.row').eq(3).should('have.text', 'Gravity: 1 standard ')
  })
  it('Verify when user searches for an invalid planet', () => {
    cy.get('#planets').click()
    cy.get('#query').type('Tatooine test')
    cy.get('button.btn-primary').click()
    cy.get('body > app-root > div > div > div > div:nth-child(5)').should('have.text', 'Not found.')
  })
  it('Verify user can clear an already searched list for a valid character', () => {    
    cy.get('#query').type('L')
    cy.get('button.btn-primary').click()
    cy.get('h6.card-subtitle').should('have.length', 10)
    cy.get('#query').clear()
    cy.get('button.btn-primary').click()
    cy.get('body > app-root > div > div > div > div:nth-child(5)').should('have.text', 'Not found.')
  })
  it('Verify user can clear an already searched list for a valid planet', () => {
    cy.get('#planets').click()
    cy.get('#query').type('T')
    cy.get('button.btn-primary').click()
    cy.get('h6.card-subtitle').should('have.length', 10)
    cy.get('#query').clear()
    cy.get('button.btn-primary').click()
    cy.get('body > app-root > div > div > div > div:nth-child(5)').should('have.text', 'Not found.')
  })
  it('Verify user can search results by pressing enter button', () => {
    cy.get('#query').type('Luke Skywalker{enter}')
    cy.get('h6.card-subtitle').should('have.text', 'Luke Skywalker')
  })
  it('Verify user gets no result when switching to planet from people for a valid character name', () => {
    cy.get('#query').type('Luke Skywalker')
    cy.get('button.btn-primary').click()
    cy.get('h6.card-subtitle').should('have.text', 'Luke Skywalker')
    cy.get('#planets').click()
    cy.get('button.btn-primary').click()
    cy.get('body > app-root > div > div > div > div:nth-child(5)').should('have.text', 'Not found.')
  })
  it('Verify user gets no result when switching to people from planet for a valid planet name', () => {
    cy.get('#planets').click()
    cy.get('#query').type('Tatooine')
    cy.get('button.btn-primary').click()
    cy.get('.card-subtitle').should('have.text', 'Tatooine')
    cy.get('#people').click()
    cy.get('button.btn-primary').click()
    cy.get('body > app-root > div > div > div > div:nth-child(5)').should('have.text', 'Not found.')
  })
  it('Verify user gets multiple results for partial matching character name', () => {
    cy.get('#query').type('L')
    cy.get('button.btn-primary').click()
    cy.get('h6.card-subtitle').should('have.length', 10)
  })
  it('Verify user gets multiple results for partial matching planet name', () => {
    cy.get('#planets').click()
    cy.get('#query').type('T')
    cy.get('button.btn-primary').click()
    cy.get('h6.card-subtitle').should('have.length', 10)
  })*/
})