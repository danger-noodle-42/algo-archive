const db = require('../model')

//Expects data in req.body
//of format { username, title }

//Outputs data in res.locals.successful
const deleteProblem = async (req, res, next) =>{
  try {
    const queryString = `
    DELETE FROM problems WHERE username=$1 AND title=$2;`
    const values = [username, title]
    await db.query(queryString, values);
    res.locals.successful = true;

    return next();
  }
  catch (e){
    res.locals.successful = false;
    return next();
  }
};

module.exports = deleteProblem;