const createProblem = require('./problems/createProblem');
const readProblem =   require('./problems/readProblem');
const updateProblem = require('./problems/updateProblem');
const deleteProblem = require('./problems/deleteProblem');
const readProblemTitles = require('./problems/readProblemTitles');
const createUser = require('./users/createUser')
const verifyUser = require('./users/verifyUser')
const createToken = require('./users/createToken')
const verifyToken = require('./users/verifyToken')
const deleteToken = require('./users/deleteToken')

module.exports = {
  createProblem,
  readProblem,
  updateProblem,
  deleteProblem,
  readProblemTitles,
  createUser,
  createToken,
  verifyUser,
  verifyToken,
  deleteToken,
}