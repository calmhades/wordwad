var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {

    app.get('/signup', authController.signup);
    // get route for sign up page

    app.get('/signin', authController.signin);
    // for sign in/login page

    app.get('/dashboard', isLoggedIn, authController.dashboard);
    // for homepage/landing page

    app.post('/signup', passport.authenticate('local-signup',
        {
            successRedirect: '/dashboard',

            failureRedirect: '/signup'
        }

    ));

    app.post('/signin', passport.authenticate('local-signin',
        {
            successRedirect: '/dashboard',

            failureRedirect: '/signin'
        }
    ));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin')
        // on failed login redirect to signin/login page for new attempt
    }
}