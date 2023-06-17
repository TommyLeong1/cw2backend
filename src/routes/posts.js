const express = require("express");
const router = express.Router();

const post = require("../model/post");

//get all the post
router.get("/", (req, res) => {
  res.send("I'm inside the posts");
});

router.get("/specific", (req, res) => {
  res.send("inside the specific post");
});

//save a post
router.post('/', (req, res) => {
  console.log(req.body);
})
module.exports = router;