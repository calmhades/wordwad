var exports = module.exports = {}

exports.signup = function (req, res) {

    res.render('newUser');
    //sign up/ account create page

};

exports.signin = function (req, res) {

    res.render('login');
    //render the sign in/ login page

};

exports.dashboard = function (req, res) {
    res.render('dashboard');
    //dashboard meaning homepage or some default page
}