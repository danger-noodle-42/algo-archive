const db = require('../model')
const bcrypt = require('bcrypt')

const verifyUser = (req, res, next) => {
  // pull username and password off req.body
  const { username, password } = req.body;
  try {
    // search db for username and store in const hashedPassword

    // hash using bcrypt
    bcrypt.compare(password, hashedPassword, (err, result) => {
      // if it doesnt match, return err message
      if (err) return next({err: "incorrect username or password"});
      // else return next after storing username on res.locals
      return next()
    });
  }
  catch (err) {
    // error handling
    console.log(err)
  };
}

module.exports = verifyUser;