const db = require('../models');

// Defining methods for the groupController
module.exports = {
    CreateGroup,
    AddFriendToGroup,
    GetAllGroups,
    updateGroup,
    deleteGroup
}

function CreateGroup(req, res) {
    console.log(req.body);
    // res.send("route hit")
    // var group = new db.Group(req.body);
    db.Group
        .create(req.body)
        .then(dbModel => {
            console.log(dbModel);
            res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
}

function AddFriendToGroup(f_id, g_id) {
    db.Group.findByIdAndUpdate(g_id, {
        $push: { friends: f_id }
    })
        .then(function (dbModel) {
            console.log(dbModel)
            db.User.findByIdAndUpdate(f_id, {
                $push: { group: g_id }
            }).catch(function (err) {
                console.log(err)
            })
        })
        .catch(function (err) {
            console.log(err)
        })
}


function GetAllGroups(req, res) {
    db.Group.find(req.query)
        .populate('group')
        .then(dbModel => res.jsos(dbModel))
        .catch(err => res.status(422).json(err));

}


function updateGroup(req, res) {
    db.Group
        .findOneAndUpdate({ groupname: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
}

function deleteGroup(req, res) {
    db.Group
    findOneAndDelete({ groupname: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(er => res.status(422).json(err));
}

