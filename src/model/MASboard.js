const mongoose = require("mongoose");
const validator = require('validator');


const MASboardSchema = mongoose.Schema({
  mas: {
    type:String
  },
  username: {
    type: String,
    required: true,
    unique:[true, "this username is already exist"]
  },
  reply: {
    type:String,
    default:"waiting for reply..."
  },
});


module.exports = mongoose.model("MASboard", MASboardSchema)