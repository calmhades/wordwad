let router = require("express").Router();
var db = require("../models");

router.use(require("./protection"));

router.route("/api/entry")
    
    .post( (req,res) => {
        
        let entry = {
            text: req.body.text,
            entryParentId: req.body.rootId
            // dynamically add data attribute to each element (as entryParentId) data-entryParentId = (value from db),
            // when you hit new entry - will use jquery to strip off data parent id property & use as entryParentId
            // if want we can have that sent back, and re-render page with freahly created entry 
        
        }
        db.Entry.create(entry).then(function(dbEntry){
            res.json(dbEntry);
        })
    });

router.route("/api/story")
    .get( (req,res) => {
        db.Story.findAll({
            limit: 1,
            order: [["createdAt", "DESC"]]
        })
        .then(function(storyData) {
            res.json(storyData)
        })
    })

    .post( (req, res) => {
        // let newStory = req.body;

        let story = {
            Title: req.body.Title,
            Genre: req.body.Genre,


        }


        console.log("_________________"+story);
        db.Story.create(story).then(function(dbStory){
            res.json(dbStory)
        })
    });

router.route("/newStory")
    .get((req, res)=>{
        res.render("newStory")

    })

router.route("/storyFrag")
    .get((req,res)=>{
        res.render("storyFrag")



    });


module.exports = router;