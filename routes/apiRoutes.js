var db = require("../models");

module.exports = function(app) {
  // Get all stories
  app.get("/api/story", function(req, res) {
    db.Story.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Find a specific story
  app.get("/api/story/:id", function(req, res) {
    db.Story.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });


  // Create a new story
  app.post("/api/story", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

 
  // Create an entry
  app.post("/api/entry", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/entry/:id", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
  
  
  app.post("/api/login", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/newUser", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
