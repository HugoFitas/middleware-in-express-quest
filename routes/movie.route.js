const express = require("express");
const router = express.Router();
const connection = require("../config");

// Router-level middleware
router.use("/", function (req, res, next) {
  console.log("Request URL:", req.originalUrl);
  next();
});

router.get("/", (req, res) => {
  connection.query("SELECT * FROM movies", (err, results) => {
    if (err) res.status(500).send(err);
    else {
      if (results.length) res.status(200).json(results);
      else res.status(404).send("Movies not found.");
    }
  });
});

module.exports = router;
