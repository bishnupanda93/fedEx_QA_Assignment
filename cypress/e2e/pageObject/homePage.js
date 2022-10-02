class homePage{
    /* Used to verify the homepage text */
    getHeader(){
        return cy.get('body > app-root > div > div > div > h1');
    }
}
export default homePage;