var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET post_applicants list */
router.get("/", function (req, res, next) {
  db("SELECT * FROM posts_applicants;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

/* POST method */
router.post("/", async function (req, res, next) {
  const { ref_post_id, ref_applicant_id, accepted } = req.body;
  const sql = `INSERT INTO posts_applicants (ref_post_id, ref_applicant_id, accepted) VALUES ('${ref_post_id}','${ref_applicant_id}','${accepted}')`;

  try {
    await db(sql);
    let results = await db("SELECT * FROM posts_applicants");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

/* PUT method */
router.put("/", async function (req, res, next) {
  const { post_id, applicant_id } = req.body;
  const sql = `UPDATE posts_applicants SET accepted = ${applicant_id} WHERE ref_post_id = ${post_id} AND ref_applicant_id = ${applicant_id} ;`;
  try {
    await db(sql);
    let results = await db("SELECT * FROM applicants");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
