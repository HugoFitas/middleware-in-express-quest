const express = require("express");
const app = express();
require("dotenv").config();
const connection = require("./config");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 5000;

connection.connect((err) => {
  if (err) console.log(err);
  else console.log(`Connected to database on thread ${connection.threadId}.`);
});

const moviesRouter = require("./routes/movie.route");

// Application-level middleware
app.use("/movies", moviesRouter);
app.use(function (req, res, next) {
  console.log("Request Type:", req.method);
  next();
});

// Third-party middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("This is my homepage!");
});

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`App is running at port ${port}.`);
});
