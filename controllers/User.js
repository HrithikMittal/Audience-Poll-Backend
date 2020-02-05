const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");

const User = require("../modals/User");

const signup = (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then((req, resp) => {
      return res.json({
        message: "User Signup Successfully",
        userDetails: newUser
      });
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const signin = (req, res) => {
  const user = req.body;
  User.findOne({ regno: user.regno })
    .then(retuser => {
      if (!retuser) {
        return res.json({ message: "User not found" });
      }
      if (retuser.password != user.password) {
        return res.json({ message: "Password is wrong" });
      }
      const token = jwt.sign({ _id: retuser._id }, process.env.JWT_SECRET);
      res.cookie("t", token, { expire: new Date() + 9999 });
      const { _id, regno, name } = retuser;
      return res.json({ token, user: { _id, regno, name } });
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const requireSignIn = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth"
});

module.exports = {
  signup,
  signin,
  requireSignIn
};
