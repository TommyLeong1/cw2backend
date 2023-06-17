const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://leongtommy123:123@cw2.by2vgj3.mongodb.net/?retryWrites=true&w=majority")
.then(() =>{
  console.log("connection is setup successfully...")
}).catch((err) =>{
  console.log("connection is not setup")
  console.log(err)
})