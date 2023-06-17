const express = require('express')
const app = express()
require("./DBconnection/conn")

app.get("/", (req,res)=> {
  res.send("I'm inside the home");
});

app.get("/posts", (req,res)=> {
  res.send("I'm inside the posts  ");
});
