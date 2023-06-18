const express = require("express");
const router = express.Router();

const CatPost = require("../model/CatPost");

//Catpost permission----------------------------------
//----------------------------------------------------

//Get all the catpost---------------------------------
router.get("/", async (req, res) => {
  try {
    // find() -> get all data
    const catposts = await CatPost.find();
    if(!catposts){
      res.json({
      status:"400",
      message:"Found catpost records FAILED"
    })
    }else{
      res.json({
      status:"200",
      message:"Found catpost records SUCCESSFULLY",
      data:catposts
    })
    }
  } catch (err) {
    res.json({ 
      status:"400",
      message: err 
    });
  }
});

//----------------------------------------------------

//Save a catpost--------------------------------------
router.post('/', async (req, res) => {
  const catposts = await new CatPost({
    id: req.body.id,
    title: req.body.title,
    username: req.body.username,
    fullText: req.body.fullText,
    description: req.body.description,
    comments: req.body.comments,
    likes: req.body.likes,
    imgURL: req.body.imgURL,
    summary: req.body.summary,
    dateCreated: req.body.dateCreated,
    dateModified: req.body.dateModified,
    breed: req.body.breed,
  });

  try {
    const savedCatPost = await catposts.save();
    if(!savedCatPost){
      res.json({
      status:"400",
      message:"Save catpost FAILED"
    })
    }else{
      res.json({
      status:"200",
      message:"Save catpost SUCCESSFULLY",
      data:savedCatPost
    })
    }
  } catch (err) {
    res.json({ 
      status:"400",
      message: err 
    });
  }  
});

//----------------------------------------------------

//Get a specific catpost------------------------------
router.get("/:catpostId", async (req, res) => {
  try {
    // findById() -> get data by id
    const catposts = await       
    CatPost.findById(req.params.catpostId);
    if(!catposts){
      res.json({
      status:"400",
      message:"Found catpost record FAILED"
    })
    }else{
      res.json({
      status:"200",
      message:"Found catpost record SUCCESSFULLY",
      data:catposts
    })
    }
  } catch (err) {
    res.json({ 
      status:"400",
      message: err 
    });
  }
});

//----------------------------------------------------

//Update a catpost------------------------------------
router.patch("/:catpostId", async (req, res) => {
  try {
    // updateOne() -> update data by id
    const updateCatPost = await CatPost.updateOne(
      {_id :req.params.catpostId},
      {
        $set : {
        id: req.body.id,
        title: req.body.title,
        username: req.body.username,
        fullText: req.body.fullText,
        description: req.body.description,
        comments: req.body.comments,
        likes: req.body.likes,
        imgURL: req.body.imgURL,
        summary: req.body.summary,
        dateCreated: req.body.dateCreated,
        dateModified: req.body.dateModified,
        breed: req.body.breed,
        },
      }
    );
    if(!updateCatPost){
      res.json({
      status:"400",
      message:"Update catpost record FAILED"
    })
    }else{
      res.json({
      status:"200",
      message:"Update catpost record SUCCESSFULLY",
      data:updateCatPost
    })
    }
  } catch (err) {
    res.json({ 
      status:"400",
      message: err 
    });
  }
});

//----------------------------------------------------

//Delete a catpost------------------------------------
router.delete("/:catpostId", async (req, res) => {
  try {
    // deleteOne() -> delete data by id
    const deleteCatPost = await CatPost.deleteOne(
      {_id :req.params.catpostId}
    );
    if(!deleteCatPost){
      res.json({
      status:"400",
      message:"Delete catpost record FAILED"
    })
    }else{
      res.json({
      status:"200",
      message:"Delete catpost record SUCCESSFULLY",
      data:deleteCatPost
    })
    }
  } catch (err) {
    res.json({ 
      status:"400",
      message: err 
    });
  }
});

//----------------------------------------------------

module.exports = router;