let router = require("express").Router();

router.use(require("./protection"));

router.route("/api/entry")
    .post( (req,res) => {
        res.json(req.user);
    })

router.route("/api/story")
    .post( (req,res) => res.json(req.user) )

router.route("/api/entryEntry")
    .post( (req,res) => res.json(req.user) )




module.exports = router;