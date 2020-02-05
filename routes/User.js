const express = require("express");
const router = express.Router();
const userController = require("../controllers/User");

router.get("/", (req, res) => {
  res.json("Hey Again");
});
router.post("/signup", userController.signup);
router.post("/signin", userController.signin);

module.exports = router;
