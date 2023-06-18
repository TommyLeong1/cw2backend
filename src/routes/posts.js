const express = require("express");
const router = express.Router();

const Post = require("../model/Post");

//get all the post
router.get("/", async (req, res) => {
  try {
    // find() -> get all data
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//save a post
router.post('/', async (req, res) => {
  const post = await new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }  
});

//get a specific post
router.get("/:postId", async (req, res) => {
  try {
    // findById() -> get data by id
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a  post
router.patch("/:postId", async (req, res) => {
  try {
    // updateOne() -> update data by id
    const updatePost = await Post.updateOne(
      {_id :req.params.postId},
      {
        $set : {
        title: req.body.title,
        description: req.body.description,
          id: 
  title:
  fullText:
  description:
  comments:
  likes:
  imgURL:
  summary:
  dateCreated:
  dateModified: 
  breed:
        },
      }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete a post
router.delete("/:postId", async (req, res) => {
  try {
    // deleteOne() -> delete data by id
    const removePost = await Post.deleteOne(
      {_id :req.params.postId}
    );
    res.json(removePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;