var exports = module.exports = {}

exports.signup = function (req, res) {

    res.render('signup');
    //sign up/ account create page

};

exports.signin = function (req, res) {

    res.render('signin');
    //render the sign in/ login page

};

exports.dashboard = function (req, res) {
    res.render('dashboard');
    //dashboard meaning homepage or some default page
}