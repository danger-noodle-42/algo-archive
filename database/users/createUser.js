const db = require('../model')
const bcrypt = require('bcrypt')
const saltRounds = 10;

const createUser = (req, res, next) => {
  // pull username and password off req.body
  const { username, password } = req.body;
  try {
    // hash using bcrypt
    bcrypt.hash(password, saltRounds, (err, hash) => {
      // insert into db

    });
    // return next()
    return next();
  }
  catch (err) {
    // error handling
    console.log(err)
  };
}

module.exports = createUser;