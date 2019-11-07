const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/user');
const chalk = require('chalk');

const local_strategy = new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {

        const user = await User.findOne({ email })
        // if(!user){
        //   const demoData = {
        //     email: "zeba@gmail.com",
        //     password: '123'
        //   }
        //   User.create(demoData)
        // } else {
        //   console.log("Passport line: 19", user)
        // }
        if (!user)
            return done(null, false, { message: "Incorrect Email" })

        if (!user.checkPassword(password)) {
            return done(null, false, { message: "Incorrect Password" })
        }

        console.log(user)
        return (null, user)

    } catch (error) {
        console.log(error)
    }
})

module.exports = local_strategy;