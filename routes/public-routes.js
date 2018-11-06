let router = require("express").Router();


  // Load index page
router.get("/", (req,res) => {
    res.render("/", {});
    res.render("index",{});
       
    });
  
router.get("/create", (req,res) => {
  res.render("newUser", {})
});
//   User.create([req.body.User], function(data) {
//     console.log(data);
//   })
// }
  // Load all stories or an individual one by ID 
router.get("/story", function(req, res) {
    
        res.render("browseWads",{});
     
    });



router.get("/story/:id", function(req, res) {
    Story.findAll({
      where: {id: req.params.creatorID}})
      .then(function(authors) {
        res.render("/browseWads", {
          author: authors
        });
      })
    });
    
module.exports = router;
