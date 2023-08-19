const db = require('../model')

const readProblem = async (req, res, next) =>{
  try {
    const queryString = `
    SELECT * FROM problems WHERE title=$1;`
    
    const result = (await db.query(queryString, [req.body.title])).rows[0];

    result.title = result.title.trim();
    result.description = result.description.trim();
    result.solution = result.solution.trim();
    result.comments = result.comments.trim();

    res.locals.successful = true;
    res.locals.problem = result;

    return next();
  }
  catch (e){
    res.locals.successful = false;
    return next();
  }
}
    
module.exports = readProblem;