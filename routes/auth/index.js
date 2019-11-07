const router = require("express").Router();
const passport = require('../../passport');

// Facebook auth routes
router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', passport.authenticate('facebook'), (req, res) => {
    res.redirect('/group');
});

// Google auth routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/group');
});

// Github auth routes
router.get('/github', passport.authenticate('github'));
router.get('/github/callback', passport.authenticate('github'), (req, res) => {
    res.redirect('/group');
});

router.get('/logout', (req, res) => {
    console.log("logging out");
    user = {};
    res.redirect('/');
});


module.exports = router; 