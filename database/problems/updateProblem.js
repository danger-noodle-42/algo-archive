const db = require('../model');

//Expects data in req.body
//of format { title, description, soution, comments }

//Outputs data in res.locals.successful

const updateProblem = async (req, res, next) => {
  try {
    //Updated to include tag
    const { title, description, solution, comments, tag } = req.body;
    // get username from cookie
    const username = req.cookies.username;

    const queryString = `UPDATE problems
    SET description = $3, solution = $4, comments = $5, tag = $6
    WHERE title=$2 AND username=$1;`;

    await db.query(queryString, [
      username,
      title,
      description,
      solution,
      comments,
      tag,
    ]);
    res.locals.successful = true;

    return next();
  } catch (e) {
    res.locals.successful = false;
    return next();
  }
};

module.exports = updateProblem;
