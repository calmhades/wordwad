module.exports = function(exports) {

    exports.signup = function (req, res) {

        res.render("signup", {User: data} );

    };

    exports.signin = function (req, res) {

        res.render("signin", {User: data} );

    };

    exports.dashboard = function (req, res) {
        res.render("dashboard", {User: data});
    };
};