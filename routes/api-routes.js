const router = require("express").Router();
const projects = require("../db/projects.js");
console.log("api routes");
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
router.get("/portfolio", (req, res) => {
  console.log("API GET ROUTE");
  projects
    .getProjects()
    .then(projects => res.json(projects))
    .catch(err => res.status(500).json(err));
});
module.exports = router;
