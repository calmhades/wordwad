let Strategy = require("passport-local").Strategy;
let User = require("../models/user");

const strategy = new Strategy(
    {
        usernameField: "email",
        passwordField: "password"
    },
    { sessions: true },
    function (username, password, done) {
        User.findOne({
            where: { username: username }
        }).then(
            function (DBuser){
                console.log("bacl from the database! lets check if our credentials are good: ");
                if (!DBuser) {
                    console.log("user " + username + " was not in the DB");
                    return done(null, false, {message: "incorrect username."});
                }
                if (!DBuser.validPassword(password)) {
                    console.log("Password " + password + " does not match the password in the DB: " + DBuser.password);

                    return done(null, false, {message: "incorrect password."});
                }
                console.log("they Are!");
                return done(null, DBuser);
            }
        )
        .catch (err => {
            return done(err, false, {message: "Some DB error:"});
        });
    }
);

module.exportds = strategy;