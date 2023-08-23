

const deleteToken = (req, res, next) => {
  try {
    // use res.clearCookie to delete cookies
    res.clearCookie('token');
    res.clearCookie('username');
    // store success on locals
    res.locals.successful = true;
    // return next()
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

module.exports = deleteToken;