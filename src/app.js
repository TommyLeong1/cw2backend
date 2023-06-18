const express = require('express')
const app = express()
require("./DBconnection/conn")
const bodyParser = require('body-parser')

//middle ware
app.use(bodyParser.json())

//import the route
const postRoute = require("./routes/posts");
const employeeRoute = require("./routes/employees");

//routes
app.use("/posts", postRoute);
app.use("/employees", employeeRoute);

//Homepage
app.get("/", (req,res)=> {
  res.send("Homepage");
});

app.get("/posts", (req,res)=> {
  res.send("I'm inside the posts  ");
});

app.listen();
