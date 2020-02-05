const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hey");
});

app.listen(port, () => {
  console.log("Port is listening on port ", port);
});
