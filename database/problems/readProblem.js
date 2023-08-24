const db = require('../model');

//Expects data in req.body
//of format { title }

//Outputs data in res.locals.successful, and
//res.locals.problem of format { title, description, soution, comments }
const readProblem = async (req, res, next) => {
  const { title } = req.body;
  // get username from cookie
  const username = req.cookies.username;
  try {
    const queryString = `
    SELECT * FROM problems WHERE title=$1 AND username=$2;`;
    const values = [title, username];
    let result = await db.query(queryString, values);
    result = result.rows[0];

    result.title = result.title.trim();
    result.description = result.description.trim();
    result.solution = result.solution.trim();
    result.comments = result.comments.trim();
    result.tag = result.tag.trim(); //Added this line of code

    res.locals.successful = true;
    res.locals.problem = result;

    return next();
  } catch (e) {
    res.locals.successful = false;
    return next();
  }
};

module.exports = readProblem;
