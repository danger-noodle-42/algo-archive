const db = require('../model')
const bcrypt = require('bcrypt')

const verifyUser = async (req, res, next) => {
  // pull username and password off req.body
  const { username, password } = req.body;
  try {
    // query string to find user data for specific user
    const queryString = 'SELECT * FROM users WHERE username=$1';
    const values = [username];
    // search db for user and store in const userData
    const userData = await db.query(queryString, values);

    // if no user is found
    if (userData.rows.length === 0) {
      // return err
      return next({err: "user not found"})
    }

    // extract error from user data
    const hashedPassword = userData.rows[0].password;

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
    return next(err)
  };
}

module.exports = verifyUser;