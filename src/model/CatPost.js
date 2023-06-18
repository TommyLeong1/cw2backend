const mongoose = require("mongoose");

const CatPostSchema = mongoose.Schema({
  id: {
    type:Number,
    required: true,
    unique:[true, "this id is already exist"]
  },
  title: {
    type:String,
    required: true,
  },
  fullText: {
    type:String,
    required: true,
  },
  description: {
    type:String,
    required: true,
  },
  comments: {
    type:String,
  },
  likes: {
    type:Number,
  },
  imgURL: {
    type:String,
  },
  summary: {
    type:String,
  },
  dateCreated : {
    type : String,
    default : Date.now,
  },
  dateModified : {
    type : String,
    default : Date.now,
  },
  breed: {
    type:String,
    required: true,
  },
});

module.exports = mongoose.model("CatPost", CatPostSchema)