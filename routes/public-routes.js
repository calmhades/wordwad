let router = require("express").Router();
var db = require("../models");

  // Load index page
router.get("/", (req,res) => {
    res.render("index");
       
    });
  
router.get("/create", (req,res) => {
  res.render("newUser")
});

//   User.create([req.body.User], function(data) {
//     console.log(data);
//   })
// }
  // Load all stories or an individual one by ID 
router.get("/story", function(req, res) {
        db.Story.findAll({})
        .then(function(data) {
        res.render("browseWads", {Story: data})
      });  
    });



// router.get("/story/:id", function(req, res) {
//     db.Story.findAll({
//       where: {id: req.params.creatorID}})
//       .then(function(authors) {
//         res.render("browseWads", {
//           author: authors
//         });
//       })
//     });


router.post("/api/users",(req,res)=>{

  db.User.create(req.body).then(function(dbUser){
    res.json(dbUser);
  });
});
    
// router.post("/api/users",function(req,res){
//   console.log("router.post is working")
//   console.log(req.body)
//     User.create(req.body).then(function(newUser){
//       res.json(newUser);
//     });
// })
    
module.exports = router;
