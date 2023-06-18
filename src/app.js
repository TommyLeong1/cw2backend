const express = require('express')
const app = express()
require("./DBconnection/conn")
const bodyParser = require('body-parser')

//middle ware
app.use(bodyParser.json())

//import the route
const adminRoute = require("./routes/admins");
const employeeRoute = require("./routes/employees");
const userRoute = require("./routes/users");
const catpostRoute = require("./routes/catposts");

//routes
app.use("/admins", adminRoute);
app.use("/employees", employeeRoute);
app.use("/users", userRoute);
app.use("/catposts", catpostRoute);

//Homepage
app.get("/", (req,res)=> {
  res.send("Homepage");
});

app.get("/posts", (req,res)=> {
  res.send("I'm inside the posts  ");
});

app.listen();
