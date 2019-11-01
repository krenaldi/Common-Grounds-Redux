const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    groupname: { type: String, required: true },
    friends: [{ 
        type: Schema.Types.ObjectId,
        ref: 'user'
     }],
    location: String,
    message: String
    // ,
    // savedPlaces: String,
}); 

const Group = mongoose.model("group", groupSchema);

module.exports = Group;