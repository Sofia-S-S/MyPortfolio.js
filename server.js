// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");

// Sets up the Express App
// =============================================================

const PORT = process.env.PORT || 8080;
const app = express();

// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
app.use(require("./routes/html-routes"));
app.use(require("./routes/api-routes"));
//require("./routes/author-api-routes.js")(app);
//require("./routes/post-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
//db.sequelize.sync({ force: true }).then(function() {
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
//});