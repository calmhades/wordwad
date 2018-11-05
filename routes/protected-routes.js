let router = require("express").Router;
let User = require("../models/user");

router.use(require("./protection"));

router.route("/api/entry")
    .post( (req,res) => {
        res.json(req.user);
    })

router.route("/api/story")
    .get(  (req,res) => res.json(req.user) )
    .post( (req,res) => res.json(req.user) )

router.route("/api/entryEntry")
    .get(  (req,res) => res.json(req.user) )
    .post( (req,res) => res.json(req.user) )




module.exports = router;