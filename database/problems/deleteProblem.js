const db = require('../model');

//Expects data in req.body
//of format { title }

//Outputs data in res.locals.successful
const deleteProblem = async (req, res, next) => {
  // get title from req
  const { title } = req.body;
  // get username from cookie
  const username = req.cookies.username;
  try {
    const queryString = `
    DELETE FROM problems WHERE username=$1 AND title=$2;`;
    const values = [username, title];
    await db.query(queryString, values);
    res.locals.successful = true;

    return next();
  } catch (e) {
    res.locals.successful = false;
    return next();
  }
};

module.exports = deleteProblem;
