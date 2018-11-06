let router = require("express").Router();
var db = require("../models");

router.use(require("./protection"));

router.route("/api/entry")
    .post( (req,res) => {
        let newEntry = req.body;
        res.json(newEntry);
    });

router.route("/api/story")
    .post( (req, res) => {
        // let newStory = req.body;

        let story = {
            Title: req.body.Title,
            Genre: req.body.Genre,
            creatorID: req.user.id
        }


        console.log("_________________"+story);
        db.Story.create(story).then(function(dbStory){
            res.json(dbStory)
        })
    });

router.route("/api/entryEntry")
    .get((req, res) => {
        let EntryEntry = {
            currentEntryID: req.body.id,
        }

        db.EntryEntry.create(EntryEntry).then(function(dbEntryEntry){
            res.json(dbEntryEntry)
        });
        // we want to grab current entry id & next entry id with res.body below. 
        // res.json(res.body);
    });

router.route("/newStory")
    .get((req, res)=>{
        res.render("newStory")

    })


module.exports = router;