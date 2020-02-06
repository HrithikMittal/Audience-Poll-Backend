const express = require("express");
const router = express.Router();

const teamControllers = require("../controllers/team");
const userControllers = require("../controllers/User");

router.get("/", (req, res) => {
  res.json("Hey");
});

router.post("/teamcreate", teamControllers.teamCreate);
router.post("/postranking", teamControllers.ranking);
router.get("/getranking", teamControllers.getPostion);
router.get("/getteams", teamControllers.getTeams);

module.exports = router;
