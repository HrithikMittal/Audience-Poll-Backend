const express = require("express");
const router = express.Router();

const teamControllers = require("../controllers/team");

router.get("/", (req, res) => {
  res.json("Hey");
});

router.post("/ranking", teamControllers.ranking);

module.exports = router;
