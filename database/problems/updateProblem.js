const db = require('../model')

const updateProblem = async (req, res, next) =>{
  try {
    const { title, description, solution, comments} = req.body;
  
    const queryString = `UPDATE problems
    SET description = $2, solution = $3, comments = $4
    WHERE title=$1;`;

    await db.query(queryString, [ title, description, solution, comments ]);
    res.locals.successful = true;
    
    return next();
  }
  catch (e){
    res.locals.successful = false;
    console.log(e);
    return next();
  }
}

module.exports = updateProblem;