const express = require("express");
const router = express.Router();

const MASboard = require("../model/MASboard");

//Catpost permission----------------------------------
//----------------------------------------------------

//Get all the masboards-------------------------------
router.get("/", async (req, res) => {
  try {
    // find() -> get all data
    const masboards = await MASboard.find();
    if(!masboards){
      res.json({
      status:"400",
      message:"Found masboards records FAILED"
    })
    }else{
      res.json({
      status:"200",
      message:"Found masboards records SUCCESSFULLY",
      data:masboards
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

//Save a masboard-------------------------------------
router.post('/', async (req, res) => {
  const masboards = await new MASboard({
    mas: req.body.mas,
    username: req.body.username,
    reply:req.body.reply,
  });

  try {
    const savedmasboards = await masboards.save();
    if(!savedmasboards){
      res.json({
      status:"400",
      message:"Save masboards FAILED"
    })
    }else{
      res.json({
      status:"200",
      message:"Save masboards SUCCESSFULLY",
      data:savedmasboards
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

//Get a specific masboard-----------------------------
router.get("/:masboardsId", async (req, res) => {
  try {
    // findById() -> get data by id
    const masboards = await       
    MASboard.findById(req.params.masboardsId);
    if(!masboards){
      res.json({
      status:"400",
      message:"Found masboards record FAILED"
    })
    }else{
      res.json({
      status:"200",
      message:"Found masboards record SUCCESSFULLY",
      data:masboards
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

//Update a masboards----------------------------------
router.patch("/:masboardsId", async (req, res) => {
  try {
    // updateOne() -> update data by id
    const updatemasboards = await MASboard.updateOne(
      {_id :req.params.masboardsId},
      {
        $set : {
        mas: req.body.mas,
        username: req.body.username,
        reply:req.body.reply,
        },
      }
    );
    if(!updatemasboards){
      res.json({
      status:"400",
      message:"Update masboards record FAILED"
    })
    }else{
      res.json({
      status:"200",
      message:"Update masboards record SUCCESSFULLY",
      data:updatemasboards
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

//Delete a masboards----------------------------------
router.delete("/:masboardsId", async (req, res) => {
  try {
    // deleteOne() -> delete data by id
    const deletemasboards = await MASboard.deleteOne(
      {_id :req.params.masboardsId}
    );
    if(!deletemasboards){
      res.json({
      status:"400",
      message:"Delete masboards record FAILED"
    })
    }else{
      res.json({
      status:"200",
      message:"Delete masboards record SUCCESSFULLY",
      data:deletemasboards
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