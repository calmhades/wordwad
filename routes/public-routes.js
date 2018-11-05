let router = require("express").Router();


  // Load index page
router.get("/", (req,res) => {
    res.render("/", {});
       
    });
  

  // Load all sotires or an individual one by ID 
  router.get("/story/:id?", function(req, res) {
    db.Story.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("browseWads", {
        example: dbExample
      });
    });
  });


  router.get("/authors/:id?", function(req, res) {
    db.User.findAll({
      where: {id: req.params.id}})
      .then(function(authors) {
        res.render("browseWads", {
          author: authors
        });
      })
    });
    
module.exports = router;
