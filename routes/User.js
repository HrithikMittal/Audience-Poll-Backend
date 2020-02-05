const express = require("express");
const router = express.router();
const userController = require("../controllers/User");

router.get("/", (req, res) => {
  res.json("Hey Again");
});
router.post("/signup", userController.signup);

module.exports = router;
