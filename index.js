const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const port = process.env.PORT;

app.use(cors());

app.get("/", (req, res) => {
  res.send("server started");
});

app.get("/blogs", (req, res) => {
  res.send("blogs");
});

app.get("/users", (req, res) => {
  res.send("users");
});
app.listen(port, () => {
  console.log("server started at ", port);
});
