// Dependencies -------------------------------
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const path = require("path");
const friends = require("../app/data/friends.js");
const compareFriends = require("../app/data/compare.js");

// API Routes -----------------------------------------------
router.get("/api/friends", (req, res) => {
  res.json(friends);
});

router.post("/api/friends", (req, res) => {
  let newfriend = req.body;
  friends.push(newfriend);
  let match = compareFriends(newfriend);
  res.json(match);
});

module.exports = router;
