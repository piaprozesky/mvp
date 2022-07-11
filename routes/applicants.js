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
  const { applicantname, email, cv, post_id } = req.body;

  const emailFound = await db(
    `SELECT email FROM applicants WHERE email = '${req.body.email}'`
  );

  if (emailFound.data.length > 0) {
    // POST applicant id and posts id (saved in userHomeView) to posts_applicants table
    let appid = await db(
      `SELECT applicant_id FROM applicants WHERE email = '${email}'`
    );
    appid = appid.data[0].applicant_id;

    await db(
      `INSERT INTO posts_applicants (ref_post_id, ref_applicant_id, accepted) VALUES (${post_id},${appid},0);`
    );
    // res.send(`SELECT * FROM posts_applicants`);
  } else {
    const sql = `INSERT INTO applicants (applicantname, email, cv) VALUES ('${applicantname}','${email}','${cv}')`;

    try {
      await db(sql);
      let results = await db("SELECT * FROM applicants");
      res.send(results.data);
    } catch (err) {
      res.status(500).send(err);
    }

    //POST applicant id and posts id (saved in userHomeView) to posts_applicants table
    const id = await db(
      `SELECT applicant_id FROM applicants WHERE email = '${req.body.email}'`
    );
    let appid = await db(
      `SELECT applicant_id FROM applicants WHERE email = '${email}'`
    );
    appid = appid.data[0].applicant_id;

    await db(
      `INSERT INTO posts_applicants (ref_post_id, ref_applicant_id, accepted) VALUES (${post_id},${appid},0);`
    );
  }
});

module.exports = router;
