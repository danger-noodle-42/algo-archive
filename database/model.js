const { Pool } = require('pg');
const { dbConnection } = require('./sensitive');

const pool = new Pool({
  connectionString: dbConnection
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};