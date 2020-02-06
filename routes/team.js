const express = require("express");
const router = express.Router();

const teamControllers = require("../controllers/team");
const userControllers = require("../controllers/User");

router.get("/", (req, res) => {
  res.json("Hey");
});

router.post("/teamcreate", teamControllers.teamCreate);
router.post(
  "/postranking",
  userControllers.requireSignIn,
  teamControllers.ranking
);
router.get("/getranking", teamControllers.getPostion);

module.exports = router;
