/// <reference types="cypress" />
import homePage from './pageObject/homePage.js'
import searchPage from './pageObject/searchPage.js'
const data = require('../fixtures/example.json');
const homepage = new homePage();
const searchpage = new searchPage();
describe('The Star Wars Search scenarios', () => {
  beforeEach(function () {    
    cy.visit(data.url)
    homepage.getHeader().should('have.text', data.header)
  })
  it('Verify when user searches for a valid character', () => {
    searchpage.searchData(data.characterName)
    searchpage.verifyData(data.characterDetails,1)
  })
  it('Verify when user searches for an invalid character', () => {
    searchpage.invalidSearch(data.invalidName)
  })
  it('Verify when user searches for a valid planet', () => {
    searchpage.searchData(data.planetName,1)
    searchpage.verifyData(data.planetDetails)
  })
  it('Verify when user searches for an invalid planet', () => {
    searchpage.invalidSearch(data.invalidName,1)
  })
  it('Verify user can clear an already searched list for a valid character', () => {    
    searchpage.searchData(data.partialName)
    searchpage.searchDataSwitchForm(3)
  })
  it('Verify user can clear an already searched list for a valid planet', () => {
    searchpage.searchData(data.partialPlanetName,1)
    searchpage.searchDataSwitchForm(3)
  })
  it('Verify user can search results by pressing enter button', () => {
    cy.get('#query').type('Luke Skywalker{enter}')
    cy.get('h6.card-subtitle').should('have.text', 'Luke Skywalker')
  })
  it('Verify user gets no result when switching to planet from people for a valid character name', () => {
    searchpage.searchData(data.characterName)
    searchpage.searchDataSwitchForm(2)
  })
  it('Verify user gets no result when switching to people from planet for a valid planet name', () => {
    searchpage.searchData(data.planetName,1)
    searchpage.searchDataSwitchForm(1)
  })
  it('Verify user gets multiple results for partial matching character name', () => {
    searchpage.searchMultipleData(data.partialName)
  })
  it('Verify user gets multiple results for partial matching planet name', () => {
    searchpage.searchMultipleData(data.partialPlanetName,1)
  })
})