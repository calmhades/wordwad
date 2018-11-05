let router = require("express").Router();

router.use(require("./protection"));

router.route("/api/entry")
    .post( (req,res) => {
        let newEntry = req.body;
        res.json(newEntry);
    });

router.route("/api/story")
    .post( (req, res) => {
        let newStory = req.body;s
        res.json(newStory);
    });

router.route("/api/entryEntry")
    .get((req,res) => {
        // we want to grab current entry id & next entry id with res.body below. 
        res.json(res.body);
    })


module.exports = router;