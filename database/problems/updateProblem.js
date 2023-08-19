const updateProblem = (req, res, next) =>{
    req.locals.successful = true;
  
    return next();
  }
      
  module.exports = updateProblem;