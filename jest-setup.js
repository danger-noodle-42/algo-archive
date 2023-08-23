import regeneratorRuntime from 'regenerator-runtime';
require('regenerator-runtime/runtime');
require('@testing-library/jest-dom/extend-expect');
const testServer = require('./server/server.js');

module.exports = () => {
  global.testServer = testServer;
}

// import regeneratorRuntime from 'regenerator-runtime';

// module.exports = () => {
//   global.testServer = require('./server');
// };