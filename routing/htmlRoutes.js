// Dependencies -------------------------------
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Express ------------------------------------
const app = express();
const PORT = process.env.PORT || 8080;

// Routing ------------------------------------
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", (req, res) => {
  res.sendFile(path.join(__dirname, "survey.html"));
});
