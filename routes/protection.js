const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

const PROTECTED = ensureLoggedIn('/forbidden');

module.exports = PROTECTED;