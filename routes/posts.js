var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET posts list */
router.get("/", function (req, res, next) {
  db("SELECT * FROM posts;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
