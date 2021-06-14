const express = require("express");
const app = express();
require("dotenv").config();
const connection = require("./config");

const port = process.env.PORT || 5000;

connection.connect((err) => {
  if (err) console.log(err);
  else console.log(`Connected to database on thread ${connection.threadId}.`);
});

app.use(express.json());

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`App is running at port ${port}.`);
});
