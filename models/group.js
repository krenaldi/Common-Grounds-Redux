const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    groupname: String,
    friends: String,
    // [{ 
    //     type: Schema.Types.ObjectId,
    //     ref: 'user'
    //  }],
    location: String
});

const Group = mongoose.model("group", groupSchema);

module.exports = Group;