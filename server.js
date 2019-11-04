const express = require('express');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const routes = require("./routes");
const profileRoutes = require('./routes/profile-routes.js');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github').Strategy;
const chalk = require('chalk');
const User = require('./models/user');

const PORT = process.env.PORT || 8080;

const app = express();

let user = {};

passport.serializeUser((user, cb) => {
    cb(null, user.id);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// List Strategies
// Facebook Strategy
passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK.clientID,
    clientSecret: keys.FACEBOOK.clientSecret,
    callbackURL: "/auth/facebook/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        console.log(chalk.blue(JSON.stringify(profile)));
        user = { ...profile };
        return cb(null, profile);
    }))

// Google Strategy
passport.use(new GoogleStrategy({
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
    }));

// Github Strategy
passport.use(new GithubStrategy({
    clientID: keys.GITHUB.clientID,
    clientSecret: keys.GITHUB.clientSecret,
    callbackURL: "/auth/github/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        console.log(chalk.gray(JSON.stringify(profile)));
        user = { ...profile };
        return cb(null, profile);
    }))


// create cookie session that expires in a day
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

app.use('/profile', profileRoutes);

// Facebook auth routes
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook'), (req, res) => {
    res.redirect('/profile');
});

// Google auth routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/profile');
});

// Github auth routes
app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback', passport.authenticate('github'), (req, res) => {
    res.redirect('/profile');
});

app.get('/user', (req, res) => {
    console.log("getting user data");
    res.send(user);
});

app.get('/auth/logout', (req, res) => {
    console.log("logging out");
    user = {};
    res.redirect('/');
});

// Add routes, both API and view
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/commonground", { useNewUrlParser: true })
    .then(() => console.log("MongoDB succesfully connected"))
    .catch(err => console.log(err));


app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});

