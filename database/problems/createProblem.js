const db = require('../model')

//Expects data in req.body
//of format { title, description, soution, comments }

//Outputs data in res.locals.successful
const createProblem = async (req, res, next) =>{
  try {
    const { title, description, solution, comments} = req.body;
  
    const queryString = `
    INSERT INTO problems (title, description, solution, comments)
    VALUES ('${title}', '${description}', '${solution}', '${comments}');`;

    await db.query(queryString);
    res.locals.successful = true;
    
    return next();
  }
  catch (e){
    res.locals.successful = false;
    return next();
  }
}

module.exports = createProblem;