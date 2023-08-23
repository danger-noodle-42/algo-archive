const db = require('../model');

//Expects username

//Outputs data in res.locals.successful, and
//res.locals.problemTitles of format [name1, name2, ...]
const readProblemTitles = async (req, res, next) => {
  const { tag } = req.body;
  const username = req.cookies.username;
  try {
    const queryString = `SELECT title FROM problems WHERE username=$1;`; //the string that SQL is reading to get data
    const values = [username]; //values that will be passed into query
    if (tag) {
      queryString += ' AND tag = $2'; //concatenating the queryStr if a tag
      values.push(tag); //add the tag to the values array
    }

    const results = await db.query(queryString, values);

    res.locals.problemTitles = results.rows
      .map((e) => e.title)
      .map((e) => e.trim());
    res.locals.successsful = true;

    return next();
  } catch (e) {
    res.locals.successsful = false;
    return next();
  }
};

module.exports = readProblemTitles;
