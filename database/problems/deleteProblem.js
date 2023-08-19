const deleteProblem = (req, res, next) =>{
  res.locals.successful = true;

  return next();
}

module.exports = deleteProblem;