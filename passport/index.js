const passport = require('passport')
const { local_strat, FB_strat, G_strat, GH_strat } = require('./strategies');
passport.use('local', local_strat);
passport.use('facebook', FB_strat);
passport.use('google', G_strat);
passport.use('github', GH_strat);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

module.exports = passport;