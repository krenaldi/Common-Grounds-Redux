const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema and Model
const userSchema = new Schema({
  username: { type: String, required: 'This field is required.' },
  email: { type: String, required: 'This field is required.' },
  password: { type: String, required: 'This field is required.' },
  liveIN: String,
  about: String,
  dateOfBirth: String, 
  group: [{
    type: Schema.Types.ObjectId,
    ref: 'group'
  }]
});


const User = mongoose.model("user", userSchema);

module.exports = User;

