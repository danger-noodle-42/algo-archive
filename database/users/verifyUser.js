const db = require('../model')
const bcrypt = require('bcrypt');

const verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  
  try {
    const queryString = 'SELECT * FROM users WHERE username=$1';
    const values = [username];
    const userData = await db.query(queryString, values);

    if (userData.rows.length === 0) {
      return next({ log: 'user not found' });
    }

    const hashedPassword = userData.rows[0].password;

    // try catch to compare
    try {
      const passwordMatch = await bcrypt.compare(password, hashedPassword);
      // if it doesnt match, return err
      if (!passwordMatch) {
        res.locals.successful = false;
        return next({ log: 'incorrect username or password' });
      }
      // if successful, go to next
      res.locals.successful = true;
      res.locals.username = username;
      return next();
    } catch (err) {
      return next({ log: 'bcrypt compare error' });
    }
  } catch (err) {
    return next({ log: 'error in verifyUser' });
  }
};

module.exports = verifyUser;

