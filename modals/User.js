const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  regno: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  password: {
    type: String
  }
});
module.exports = User = mongoose.model("User", UserSchema);
