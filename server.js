// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const htmlRoutes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");

// Initialize the app and create a port
// ==============================================================================
// DEPENDENCIES
const app = express();
// ==============================================================================
// EXPRESS CONFIGURATION
const PORT = process.env.PORT || 8080;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// Requiring our models for syncing

// ================================================================================
// ROUTER
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);
// Syncing our sequelize models and then starting our Express app
// =============================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
