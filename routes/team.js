const express = require("express");
const router = express.Router();

const teamControllers = require("../controllers/team");
const userControllers = require("../controllers/User");

router.get("/", (req, res) => {
  res.json("Hey");
});

router.post("/teamcreate", teamControllers.teamCreate);
router.post("/ranking", teamControllers.ranking, userControllers.requireSignIn);

module.exports = router;
