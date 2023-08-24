const db = require('../model');

//Expects username

//Outputs data in res.locals.successful, and
//res.locals.problemTitles of format [name1, name2, ...]
const readProblemTitles = async (req, res, next) => {
  console.log('top of readProblemTitles');
  console.log('req.body: ', req.body);
  const { tag } = req.body;
  const username = req.cookies.username;
  console.log(`tag: ${tag}, username: ${username}`);
  try {
    let queryString = `SELECT title FROM problems WHERE username=$1`; //the string that SQL is reading to get data
    const values = [username]; //values that will be passed into query
    console.log('values: ', values)
    if (tag) {
      queryString += ' AND tag = $2'; //concatenating the queryStr if a tag
      values.push(tag); //add the tag to the values array
      console.log('values', values)
    }
    console.log('queryString: ', queryString);
    const results = await db.query(queryString, values);
    console.log('results.rows: ', results.rows);
    res.locals.problemTitles = results.rows.map((e) => e.title).filter((e) => e.trim());
    // res.locals.problemTitles = results.rows.filter((e) => e.tag === tag).map((e) => e.title);
    // .filter((e) => e.tag === tag)
    res.locals.successsful = true;

    return next();
  } catch (e) {
    res.locals.successsful = false;
    return next();
  }
};

module.exports = readProblemTitles;
