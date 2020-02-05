const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true },
  (req, res) => {
    console.log("Database is connected successfully");
  }
);

app.get("/", (req, res) => {
  res.send("Hey");
});

const userRoutes = require("./routes/User");

app.use(cookieParser());
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log("Port is listening on port ", port);
});
