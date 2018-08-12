// Dependencies -------------------------------
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const htmlRoutes = require("./routing/htmlRoutes.js");
const apiRoutes = require("./routing/apiRoutes.js");
const friends = require("./app/data/friends.js");
const compareFriends = require("./app/data/compare.js");

// app and port------------------------------------
const app = express();
const PORT = process.env.PORT || 8080;

// Body Parser ---------------------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing ------------------------------------------------
// app.use('/', htmlRoutes);
// app.use('/api', apiRoutes);

// HTML Routes ---------------------------------------------
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/home.html"));
});

app.get("/survey", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/survey.html"));
});

// API Routes -----------------------------------------------
app.get("/api/friends", (req, res) => {
  res.json(friends);
});

app.post("/api/friends", (req, res) => {
  let newfriend = req.body;
  friends.push(newfriend);
  let match = compareFriends(newfriend);
  res.json(match);
});

// Starts the server -----------------------------------------
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
