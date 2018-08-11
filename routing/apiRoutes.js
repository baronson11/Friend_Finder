// Dependencies -------------------------------
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const friends = require("../app/data/friends.js");

// Express ------------------------------------
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing ------------------------------------
app.get("/api/friends", (req, res) => {
  res.json(friends);
});

app.post("/api/friends", (req, res) => {
  let newfriend = req.body;
  newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
  console.log(newfriend);
  res.json(newfriend);
});
