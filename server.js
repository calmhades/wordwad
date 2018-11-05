var env = require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var db = require("./models");


var app = express();
var passport = require("passport");
var session = require("express-session");

var authRoute = require('./routes/auth')(app, passport);
console.log(authRoute);


// var express = require('express');
// var app = express();
// var yourModule = require('yourFile');
// app.get('/your_path', yourModule.yourFunction);

var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true })); //this is the sessions secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./config/passport.js")(passport, models.User);



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
