var db = require("../models");


module.exports = function(app) {
  // Load index page

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));   
    });
  


  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, '../login.html'));   
  });


  // Load all sotires or an individual one by ID 
  app.get("/story/:id?", function(req, res) {
    db.Story.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });



  app.get("/authors/:id?", function(req, res) {
    db.User.findAll({
      where: {id: req.params.id}})
      .then(function(authors) {
        res.render("index", {
          author: authors
        });
      })
    });
    
  };

 
