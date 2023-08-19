const createProblem = (req, res, next) =>{
  res.locals.successful = true;
  // INSERT INTO problems (title, description, solution, comments)
  // VALUES ('Initial Title Test', 'Description from DB', 'Solution From DB', 'comments from DB');

  return next();
}

module.exports = createProblem;