const readProblem = (req, res, next) =>{
  req.locals.title;
  
  res.locals.problem = {
    title: 'test Title',
    description: 'test Description',
    solution: 'test Solution',
    comments: 'test Comments',
  };

  return next();
}
    
module.exports = readProblem;