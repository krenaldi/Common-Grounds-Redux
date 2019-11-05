const db = require('../models');

// Defining methods for the usersController

module.exports = {
    GetAllUser,
    AddUser,
    updateUser,
    deleteUser
}

function GetAllUser(req, res) {
    db.User.find(req.query)
    .populate('group')
        .then(dbModel => res.jsos (dbModel))
        .catch(err => res.status(422).json(err));
        
}

function AddUser( req, res) {
   var user = new db.User(req.body);
   console.log(user);
   console.log(req.body);
   db.User
   .create(user)
   .then(dbModel => res.json(dbModel))
   .catch(err => res.status(422).json(err));
}

function updateUser( req, res) {
    db.User
    .findOneAndUpdate( { username:req.params.id} , req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
}

function deleteUser (req, res) {
    db.User
    findOneAndDelete({ username: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch( er => res.status(422).json(err));
}
