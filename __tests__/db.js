const fs = require('fs');
const path = require('path');
const db = require('./database/model.js');

const testJsonFile = path.resolve(__dirname, './database/db.test.json');

const { dbConnection } = require('./sensitive'); //Imports the db connection


