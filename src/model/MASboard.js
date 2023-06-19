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
});


module.exports = mongoose.model("MASboard", MASboardSchema)