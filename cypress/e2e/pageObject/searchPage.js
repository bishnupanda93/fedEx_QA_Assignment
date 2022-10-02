class searchPage {
    /* Used to search People or Planet for a valid set of data */
    searchData(name,value) {
        switch(value) {            
            case(1): {
                cy.get('#planets').click();
            } break;
        }
        cy.get('#query').type(name)
        cy.get('button.btn-primary').click()
        cy.get('h6.card-subtitle').contains(name)
    }
    /* Used to search data after switching a form or after clearing the search box */
    searchDataSwitchForm(value) {
        switch(value) {
            case(1): {
                cy.get('#people').click()
            } break;
            case(2): {
                cy.get('#planets').click()
            } break;
            case(3): {
                cy.get('#query').clear()
            } break;
        }        
        cy.get('button.btn-primary').click()
        cy.get('body > app-root > div > div > div > div:nth-child(5)').should('have.text', 'Not found.')
    }
    /* Used to search multiple data */
    searchMultipleData(name,value) {
        switch(value) {            
            case(1): {
                cy.get('#planets').click();
            } break;
        }
        cy.get('#query').type(name)
        cy.get('button.btn-primary').click()
        cy.get('h6.card-subtitle').should('have.length', 10)
    }
    /* Used to verify People or Planet details for a valid set of data */
    verifyData(details,value) {
        cy.get('.row').eq(1).should('have.text', details[0])
        cy.get('.row').eq(2).should('have.text', details[1])
        cy.get('.row').eq(3).should('have.text', details[2])
        switch(value) {
            case(1): {
                cy.get('.row').eq(4).should('have.text', details[3])
            } break;
        }        
    }
    /* Used to search People or Planet for invalid data */
    invalidSearch(name,value) {
        switch(value) {            
            case(1): {
                cy.get('#planets').click();
            } break;
        }
        cy.get('#query').type(name)
        cy.get('button.btn-primary').click()
        cy.get('body > app-root > div > div > div > div:nth-child(5)').should('have.text', 'Not found.')
    }
}
export default searchPage;