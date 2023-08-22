const db = require('../model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const createUser = (req, res, next) => {
  // pull username and password off req.body
  const { username, password } = req.body;
  try {
    // hash using bcrypt
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        console.log(err);
        return next(err); // Call next with error parameter
      }
      // insert into db
      const queryString =
        'INSERT INTO users (username, password) VALUES ($1, $2)';
      const values = [username, hash];
      db.query(queryString, values)
        .then(() => {
          return next(); // Call next after successful insertion
        })
        .catch(error => {
          console.log(error);
          return next(error); // Call next with error parameter
        });
    });
  } catch (err) {
    // error handling
    console.log(err);
    return next(err); // Call next with error parameter
  }
};

module.exports = createUser;
