const db = require('../model')

//Expects data in req.body
//of format { title, description, soution, comments }

//Outputs data in res.locals.successful
const createProblem = async (req, res, next) =>{
  try {
    // get details from req.body
    const { title, description, solution, comments, tag } = req.body;
    // get username from cookie
    const username = req.cookies.username;
  
    //updated the next few codes to include username and tag
    const queryString = `
    INSERT INTO problems (username, title, description, solution, comments, tag) 
    VALUES ('${username}', '${title}', '${description}', '${solution}', '${comments}', '${tag}');`;

    await db.query(queryString);
    res.locals.successful = true;
    console.log('res.locals.successful: ', res.locals.successful)
    return next();
  }
  catch (e){
    res.locals.successful = false;
    return next();
  }
}

module.exports = createProblem;