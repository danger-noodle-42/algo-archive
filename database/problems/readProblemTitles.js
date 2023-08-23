const db = require('../model')

//Expects username

//Outputs data in res.locals.successful, and 
//res.locals.problemTitles of format [name1, name2, ...]
const readProblemTitles = async (req, res, next) => {
  const { username } = req.body;
  try {
    const queryString = `
    SELECT title from problems WHERE username=$1;
    `;
    const values = [username]
    const results = await db.query(queryString, values);
    res.locals.problemTitles = results.rows.map(e=>e.title).map(e=>e.trim());
    res.locals.successsful = true;

    return next();
  }
  catch (e){
    res.locals.successsful = false;
    return next();
  }
};

module.exports = readProblemTitles;