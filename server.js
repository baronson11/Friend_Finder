// Dependencies -------------------------------
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const friends = require("./app/data/friends.js");
const compareFriends = require("./app/data/compare.js");

// app and port------------------------------------
const app = express();
const PORT = process.env.PORT || 8080;

// Body Parser ---------------------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing ------------------------------------------------

const htmlRoutes = require("./routing/htmlRoutes");
const apiRoutes = require("./routing/apiRoutes");

app.use(htmlRoutes);
app.use(apiRoutes);

// Starts the server -----------------------------------------
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
