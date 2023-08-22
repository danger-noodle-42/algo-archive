const bcrypt = require('bcrypt');

const verifyToken = (req, res, next) => {
  // pull token cookie off header and store in const token
  try {
    // use jwt verify to check if token is valid
    // if valid, give access to page
    // else, redirect to login page
  } catch (err) {
    // error handling
    console.log(err);
  }
};

module.exports = verifyToken;
