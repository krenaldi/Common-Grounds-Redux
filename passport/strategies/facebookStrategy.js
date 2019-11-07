const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../../config/keys')
const chalk = require('chalk');
const User = require('../../models/user');
;
const facebook_strat = new FacebookStrategy({
    clientID: keys.FACEBOOK.clientID,
    clientSecret: keys.FACEBOOK.clientSecret,
    callbackURL: "/auth/facebook/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        console.log(chalk.blue(JSON.stringify(profile)));
        user = { ...profile };
        User.findOne({ googleId: profile.id }).then((currentUser) => {
            if (currentUser) {
                // if user already exists
                // console.log('user is: ', currentUser);
                cb(null, currentUser);
            } else {
                // if user doens't exist create user in db
                new User({
                    username: profile.displayName,
                    facebookId: profile.id,
                    // photo: profile._json.avatar_url
                }).save().then((newUser) => {
                    console.log('new user created: ' + newUser);
                    cb(null, newUser);
                });
            }
        })
    })

module.exports = facebook_strat