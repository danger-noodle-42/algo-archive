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
        return next({log: "error in bcrypt"});
      }
      // insert into db
      const queryString =
        'INSERT INTO users (username, password) VALUES ($1, $2)';
      const values = [username, hash];
      db.query(queryString, values)
        .then(() => {
          // store success on locals
          res.locals.successful = true;
          // store username on locals
          res.locals.username = username;
          // Call next after successful insertion
          return next();
        })
        .catch(error => {
          console.log(error);
          return next({log: 'error in query in createUser'});
        });
    });
  } catch (err) {
    // error handling
    console.log(err);
    return next({log: "error in createUser"}); 
  }
};

module.exports = createUser;
