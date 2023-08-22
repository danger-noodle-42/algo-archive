

const deleteToken = (req, res, next) => {
  try {
    // use res.clearCookie to delete cookie
    res.clearCookie('token');
    // return next()
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

module.exports = deleteToken;