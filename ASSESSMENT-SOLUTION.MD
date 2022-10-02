## QA Engineer Assessment

# Framework:

1. mocha and cypress framework is used
2. "test.cy.js" file contains the Test screnarios
3. Below are the list of scenarios identified as per the functional document
    * Verify when user searches for a valid character
    * Verify when user searches for an invalid character
    * Verify when user searches for a valid planet
    * Verify when user searches for an invalid planet
    * Verify user can clear an already searched list for a valid character
    * Verify user can clear an already searched list for a valid planet
    * Verify user can search results by pressing enter button
    * Verify user gets no result when switching to planet from people for a valid character name
    * Verify user gets no result when switching to people from planet for a valid planet name
    * Verify user gets multiple results for partial matching character name
    * Verify user gets multiple results for partial matching planet name
4. "pageObject" folder contains the page wise methods(reusable functions)
5. "fixtures" folder contains external data which can be used as input parameters or assertions
6. "cypress-mochawesome-reporter" is used to generate HTML report with failure logs in 'reports' folder
7. For failed scenarios Screenshots will be captured under 'screenshots' folder

# Steps to run the test set

1. "cypress:run" is defined under scripts in package.json file
2. use command "npm run cypress:run" to run the test suite

# Bugs/Observations found

1. 2 test scenarios are failing because of below bug
   * When user clears an already searched list and click on search again, user should get "Not Found" message.
    Steps:
        * Go to the url
        * select People or Planets check box 
        * type a valid value and click on search
        * user should get a valid result
        * clear the search form and click on search
        * expected:
            * user should get "Not found" message
        * actual:
            * user is getting the same list of valid result
