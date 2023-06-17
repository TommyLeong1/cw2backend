const express = require('express')
const app = express()
require("./DBconnection/conn")

//middle ware
//import the route
const postRoute = require("./routes/posts");

app.use("/posts", postRoute);

//routes
app.get("/", (req,res)=> {
  res.send("Homepage");
});

app.get("/posts", (req,res)=> {
  res.send("I'm inside the posts  ");
});

app.listen();
