const express = require('express');
const cors = require('cors');
const passport = require('./passport');
const mongoose = require('mongoose');
const routes = require("./routes");
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const chalk = require('chalk');

const PORT = process.env.PORT || 8080;

const app = express();

let user = {};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create cookie session that expires in a day
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

app.get('/user', (req, res) => {
    console.log("getting user data");
    res.send(user);
});

app.get('/auth/logout', (req, res) => {
    console.log("logging out");
    user = {};
    res.redirect('/');
});

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/commonground";
mongoose.connect(MONGODB_URI , { useNewUrlParser: true })
    .then(() => console.log("MongoDB succesfully connected"))
    .catch(err => console.log(err));


app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});