const db = require('../model')

//Expects no input data

//Outputs data in res.locals.successful, and 
//res.locals.problemTitles of format [name1, name2, ...]
const readProblemTitles = async (req, res, next) => {
  try {
    const queryString = `
    SELECT title from problems;
    `;

    const results = await db.query(queryString);
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