'use strict'
var env = require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
<<<<<<< HEAD
var passport = require("passport");
var session = require("express-session");

var authRoute = require('./routes/auth')(app, passport);
console.log(authRoute);


// var express = require('express');
// var app = express();
// var yourModule = require('yourFile');
// app.get('/your_path', yourModule.yourFunction);
=======
>>>>>>> ef6f7b64c9006b444d31001ba2e3cc299ab55b4b

var PORT = process.env.PORT || 3000;

// Setup passport
let passport = require("./passport-init")(app);



// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(require("cookie-parser")());
app.use(require("morgan")("combined"))

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Forbidden route - redirects here from protected routes when not logged in
app.get("/forbidden", (req, res) => {
  res.send(403, "You are not authorized to view this page")
});

// Routes

const PROTECTED = require("./routes/protection");

let protectedRoutes = require("./routes/protected-routes");
let publicRoutes = require("./routes/public-routes");

//protectedRoutes.use(PROTECTED);

app.use(publicRoutes);
app.use(protectedRoutes);



var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    )
  })
}).catch(function (err) {
  console.log(err, "Something went wrong with the database update! HAVE A GREAT DAY!!!");
});

module.exports = app;
