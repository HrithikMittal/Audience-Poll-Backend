const User = require("../modals/User");

const signup = (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then((req, res) => {
      res.json({ message: "User Signup Successfully", userDetails: newUser });
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const signin = (req, res) => {
  const user = req.body;
  User.find({ regno: user.regno })
    .then(retuser => {
      if (!retuser) {
        return res.json({ message: "User not found" });
      }
      if (retuser.password === user.password) {
        res.json({ message: "User is login successfully" });
      }
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

module.exports = {
  signup,
  signin
};
