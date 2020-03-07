// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");
const router = require("express").Router();

// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads index.html
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// contact route loads contact.html
router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/about.html"));
});

// portfolio route loads portfolio.html
router.get("/portfolio", (req, res) => {
  res.sendFile(path.join(__dirname, "/portfolio.html"));
});
module.exports = router;
