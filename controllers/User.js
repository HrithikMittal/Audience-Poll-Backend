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

export default {
  signup
};
