let passport = require("passport");
let session = require("express-session")({secret: "nsjfjadjeh83294q72hfdsheurhfdusf" , resave: false, saveUninitialized: false})

let User = require("./models/user");

module.exports = function(expressApp) {
    // Initializing local authentication strategy 
    passport.use(require("./authorization_strategies/local"))


    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    expressApp.use(session);  

    // Initialize Passport and let Express know about it
    expressApp.use(passport.initialize());
    // Set up sessions 
    expressApp.use(passport.session());

    //Initialize authentication specific routes. This needs to be changed to match your configs
    expressApp.use(require("./routes/local-authentication-routes")(passport));

    return passport;
};

// serializeUser is called after every request to persist the data
//Since our user is a Sequelize Model, we can just save the model to serialize it.
//the data is now persisted to the database
const serializeUser = function (user, done) {
    let id = (user.id? user.id: user[0].id) //might be different? i think just one of these or similar
    console.log("Serializing user: ", id)
    //user.save();
    done(null, id);
}

//  deserializeUser is called when resuming a session
//  it should get your user information from the database
const deserializeUser = function(saveId, done) {
    console.log("Deserializing user: ", id)
     /*
    In this case, the User model has the information about our user
    Remember that we saved the id to the cookie in serializeUser, so the savedId passed to us above is the id we need to search
    Since we are using MySQL, use Sequelize to get the user by id
    We just need to match the id column in the database to savedId
    */ 
   User.findOne({
       where: {id:saveId},
       attributes: {
           exclude: ["password"] //user has the password in it, let's filter that out
       }
   }).then(function(user) {
       console.log("Got user: ", user)
       done(null, user) //We have successfully deserialized our user. Call done() with null as the first arg, since no errors.
       //you can now get your user info in req.user
   }).catch(function(err) {
       console.log("Failed to get user: ", err)
       done(err, null)
   })
}