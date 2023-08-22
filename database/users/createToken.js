const db = require('../model')
var jwt = require('jsonwebtoken')
require('dotenv').config();


const createToken = (req, res, next) => {
  // pull username off res.locals
  const { username } = res.locals;
  try {
    // search db for username and return the user obj
    // use jwt.sign to sign user object with secret
    // create cookie with jwt
    // redirect to home page?
  }
  catch (err) {
    // error handling
    console.log(err)
  };
}

module.exports = createToken;