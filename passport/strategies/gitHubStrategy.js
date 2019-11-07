const GithubStrategy = require('passport-github').Strategy;
const keys = require('../../config/keys')
const chalk = require('chalk');
const User = require('../../models/user');

const GH_strat = new GithubStrategy({
    clientID: keys.GITHUB.clientID,
    clientSecret: keys.GITHUB.clientSecret,
    callbackURL: "/auth/github/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        console.log(chalk.gray(JSON.stringify(profile)));
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
                    githubId: profile.id,
                    photo: profile._json.avatar_url
                }).save().then((newUser) => {
                    console.log('new user created: ' + newUser);
                    cb(null, newUser);
                });
            }
        })
    })

module.exports = GH_strat