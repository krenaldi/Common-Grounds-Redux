const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema and Model
const userSchema = new Schema({
  username: String,
  googleId: String,
  photo: String,
  email: String,
  password: String,
  city: String,
  state: String,
  group: [{
    type: Schema.Types.ObjectId,
    ref: 'group'
  }]
});


const User = mongoose.model("user", userSchema);

module.exports = User;

