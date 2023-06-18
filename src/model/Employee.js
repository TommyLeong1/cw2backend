const mongoose = require("mongoose");
const validator = require('validator');

const EmployeeSchema = mongoose.Schema({
  firstName: {
    type:String
  },
  lastName: {
    type:String
  },
  username: {
    type: String,
    required: true,
    unique:[true, "this username is already exist"]
  },
  about: {
    type:String
  },
  dateRegistered : {
    type :String,
    default : Date.now,
  },
  password: {
    type:String
  },
  passwordSalt: {
    type:String
  },
  email: {
    type:String,
    required: true,
    unique:[true, "this email is already exist"],
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("this email is not valid")
      }
    }
  },
  avatarURL: {
    type:String
  },
  signUpCode: {
    type:String    
  },
});

module.exports = mongoose.model("Employee", EmployeeSchema)