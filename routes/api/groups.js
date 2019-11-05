const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Group Model
const Group = require('../../models/Group');

// @route   GET api/groups
// @desc    Get All groups
// @access  Private
router.get('/', auth, (req, res) => {
  console.log("here")
  Group.find()
    .sort({ date: -1 })
    .then(groups => res.json(groups));
});

// @route   POST api/groups
// @desc    Create An Group
// @access  Private
router.post('/', auth, (req, res) => {
  const newGroup = new Group({
    name: req.body.name
  });

  newGroup.save().then(group => res.json(group));
});

// @route   DELETE api/groups/:id
// @desc    Delete A Group
// @access  Private
router.delete('/:id', auth, (req, res) => {
  Group.findById(req.params.id)
    .then(group => group.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
