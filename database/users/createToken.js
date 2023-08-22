const db = require('../model')
var jwt = require('jsonwebtoken')
require('dotenv').config();


const createToken = (req, res, next) => {
  // pull username off res.locals
  const { username } = res.locals;
  try {
    // search db for username and return the user obj
    let user;
    // use jwt.sign to sign user object with secret and store in const token
    const token = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN);
    // create cookie with jwt
    res.cookie('token', token)
    // redirect to home page?
  }
  catch (err) {
    // error handling
    console.log(err)
  };
}

module.exports = createToken;