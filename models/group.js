const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    groupname: { type: String, required: true },
     friends: String,
    // [{ 
    //     type: Schema.Types.ObjectId,
    //     ref: 'user'
    //  }],
    location: String,
    message: String
}); 

const Group = mongoose.model("group", GroupSchema);

module.exports = Group;