const { Pool } = require('pg'); //Pool class is used to manage connections to the database
const { dbConnection } = require('./sensitive'); //Imports the db connection

const pool = new Pool({
  connectionString: dbConnection,
}); //a new Pool instance using the connection string in the dbConnection object.

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback); //invokes query method of the pool object (the db connection pool)
  },
}; //exports a query obj with
