const mongoose = require("mongoose");
const mongooseSchema = mongoose.Schema({
  name: {
    type: String
  },
  rank: {
    type: Number
  }
});

module.exports = Team = mongoose.model("Team", mongooseSchema);
