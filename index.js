const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
var cors = require("cors");

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true },
  (req, res) => {
    console.log("Database is connected successfully");
  }
);

const data = require("./home.json");
app.get("/", (req, res) => {
  res.send(data);
});

const userRoutes = require("./routes/User");
const teamRoutes = require("./routes/team");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/user", userRoutes);
app.use("/team", teamRoutes);

app.listen(port, () => {
  console.log("Port is listening on port ", port);
});
