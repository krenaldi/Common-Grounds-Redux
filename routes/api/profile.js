const express = require('express');
const router = express.Router();
const user = require('../../models/user');

// Get user
router.get('/profile', (req, res) => {
    user.findOne({_id: req.params.id}, req.body)
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err));
});

// Update user
router.get('/profile', (req, res) => {
    user.findOneAndUpdate({_id: req.params.id}, req.body)
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err));
});

// delete user
router.get('/profile', (req, res) => {
    user.remove({_id: req.params.id}, req.body)
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err));
});

