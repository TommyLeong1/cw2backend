const express = require('express')
const cors = require('cors');
const app = express()
require("./DBconnection/conn")
const bodyParser = require('body-parser')

//middle ware
app.use(bodyParser.json())

//Access-Control-Allow-Origin
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://cw2frontend.tommyleong1.repl.co');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//import the route
const adminRoute = require("./routes/admins");
const employeeRoute = require("./routes/employees");
const userRoute = require("./routes/users");
const catpostRoute = require("./routes/catposts");
const favcatpostRoute = require("./routes/favcatposts");
const loginRoute = require("./routes/login");
const masboardsRoute = require("./routes/masboards");

//routes
app.use("/admins", adminRoute);
app.use("/employees", employeeRoute);
app.use("/users", userRoute);
app.use("/catposts", catpostRoute);
app.use("/login", loginRoute);
app.use("/favcatposts", favcatpostRoute);
app.use("/masboards", masboardsRoute);

//Restful api Homepage
app.get("/", (req,res)=> {
  res.send("Connect Restful api Successfuly");
});

app.listen();
