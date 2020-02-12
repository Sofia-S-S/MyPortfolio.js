const db = require("../db/data.json");

// Routes
// =============================================================

module.exports = function(app) {
  // Basic route that sends the user first to the AJAX Page
  app.get("/api/data/", function(req, res) {
    //console.log(db.blog);
    res.json(db);
  });
};
