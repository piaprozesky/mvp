var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET applicants list */
router.get("/", function (req, res, next) {
  db("SELECT * FROM applicants;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

/* POST method */
router.post("/", async function (req, res, next) {
  const { applicantname, email, cv } = req.body;
  const sql = `INSERT INTO applicants (applicantname, email, cv) VALUES ('${applicantname}','${email}','${cv}')`;

  try {
    await db(sql);
    let results = await db("SELECT * FROM applicants");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

/* PUT method */
router.put("/:id", function (req, res, next) {});

module.exports = router;
