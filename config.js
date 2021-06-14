require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createConnection({
  hostname: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

module.exports = connection;
