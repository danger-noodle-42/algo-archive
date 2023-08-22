const db = require('../model')
var jwt = require('jsonwebtoken')
require('dotenv').config();


const createToken = async (req, res, next) => {
  // pull username off res.locals
  const { username } = res.locals;
  try {
    // create query string that finds user that matches username
    const queryString = 'SELECT * FROM users WHERE username=$1';
    const values = [username]
    // search db for username and return the user obj
    const user = await db.query(queryString, values)
    // use jwt.sign to sign user object with secret and store in const token
    const token = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN);
    // create cookie with jwt
    res.cookie('token', token)
    // store success on locals
    res.locals.success = true;
    // move to next
    return next()
  }
  catch (err) {
    // error handling
    console.log(err);
    return next(err);
  };
}

module.exports = createToken;