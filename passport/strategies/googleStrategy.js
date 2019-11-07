const keys = require('../../config/keys')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const chalk = require('chalk');
const User = require('../../models/user');

const google_strat = new GoogleStrategy({
    clientID: keys.GOOGLE.clientID,
    clientSecret: keys.GOOGLE.clientSecret,
    callbackURL: "/auth/google/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        console.log(chalk.red(JSON.stringify(profile)));
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
                    googleId: profile.id,
                    photo: profile._json.picture
                }).save().then((newUser) => {
                    console.log('new user created: ' + newUser);
                    cb(null, newUser);
                });
            }
        })
    })

    module.exports = google_strat