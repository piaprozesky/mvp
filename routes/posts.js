var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET method */
router.get("/", function (req, res, next) {
  db("SELECT * FROM posts;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

/* POST method */
router.post("/", async function (req, res, next) {
  const { company, title, postdescription, filled } = req.body;
  const sql = `INSERT INTO posts (company, title, postdescription, filled) VALUES ('${company}','${title}','${postdescription}',${filled} )`;

  try {
    await db(sql);
    let results = await db("SELECT * FROM posts");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

/* PUT method */
router.put("/:id", async function (req, res, next) {
  const sql = `UPDATE posts SET filled  =  !filled WHERE id = ${req.params.id};`;
  try {
    await db(sql);
    let results = await db("SELECT * FROM posts");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
