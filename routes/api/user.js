const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('../../passport');
// Load user model
const user = require('../../models/user');
const { forwardAuthenticated } = require('../../passport/auth');

// Login Page 
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));

// Register
router.post('/register', (req, res) => {
  const {
    username,
    email,
    password,
    city,
    state,
    group 
  } = req.body;
  let errors = [];

  if ( !email || !password ) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      email,
      password
    });
  } else {
    user.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          email
        });
      } else {
        const newUser = new user({
            username,
            email,
            password,
            city,
            state,
            group 
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('/users/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

router.post('/login', passport.authenticate('local'), (req, res)=>{
  console.log("AUTH WORKED")
  res.redirect('/group');

});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/user/login');
});

module.exports = router;

