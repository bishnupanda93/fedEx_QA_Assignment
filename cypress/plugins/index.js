//const tsPreprocessor = require('./ts-preprocessor');

/*module.exports = on => {
  on('file:preprocessor', tsPreprocessor);
};*/
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}