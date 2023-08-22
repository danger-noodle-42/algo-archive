
var jwt = require('jsonwebtoken')
require('dotenv').config();

const verifyToken = (req, res, next) => {
  // pull token cookie off header and store in const token
  const { token } = req.cookies;
  try {
    // use jwt verify to check if token is valid
    jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, success) => {
      if (err) {
        console.log(err);
        return next(err)
      }
      // if valid, give access to page
      // store success on locals
      res.locals.success = true;
      return next()
    });
  } catch (err) {
    // error handling
    console.log(err);
    return next(err);
  }
};

module.exports = verifyToken;
