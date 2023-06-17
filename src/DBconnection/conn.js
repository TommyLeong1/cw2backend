const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/employee")
.then(() =>{
  console.log("connection is setup successfully...")
}).catch((err) =>{
  console.log("connection is not setup")
  console.log(err)
})