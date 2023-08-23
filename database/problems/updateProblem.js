const db = require('../model')

//Expects data in req.body
//of format { title, description, soution, comments }

//Outputs data in res.locals.successful

const updateProblem = async (req, res, next) =>{
  try {
    //Updated to include tag
    const { title, description, solution, comments, tag } = req.body;
  
    const queryString = `UPDATE problems
    SET description = $2, solution = $3, comments = $4, tag = $5
    WHERE title=$1;`;

    await db.query(queryString, [ title, description, solution, comments, tag ]);
    res.locals.successful = true;
    
    return next();
  }
  catch (e){
    res.locals.successful = false;
    return next();
  }
}

module.exports = updateProblem;