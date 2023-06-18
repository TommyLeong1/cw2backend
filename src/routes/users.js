const express = require("express");
const router = express.Router();

const User = require("../model/User");

//get all the user
router.get("/", async (req, res) => {
  try {
    // find() -> get all data
    const users = await User.find();
    if(!users){
      res.json({
      status:"400",
      message:"Found user records FAILED"
    })
    }else{
      res.json({
      status:"200",
      message:"Found user records SUCCESSFULLY",
      data:users
    })
    }
  } catch (err) {
    res.json({ 
      status:"400",
      message: err 
    });
  }
});

//save a user(register)
router.post('/', async (req, res) => {
  const users = await new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    about: req.body.about,
    dateRegistered: req.body.dateRegistered,
    password: req.body.password,
    passwordSalt: req.body.passwordSalt,
    email: req.body.email,
    avatarURL: req.body.avatarURL,
  });

  try {
    const savedUser = await users.save();
    if(!savedUser){
      res.json({
      status:"400",
      message:"Save user FAILED"
    })
    }else{
      res.json({
      status:"200",
      message:"Save user SUCCESSFULLY",
      data:savedUser
    })
    }
  } catch (err) {
    res.json({ 
      status:"400",
      message: err 
    });
  }  
});

//get a specific user
router.get("/:userId", async (req, res) => {
  try {
    // findById() -> get data by id
    const users = await       
    User.findById(req.params.userId);
    if(!users){
      res.json({
      status:"400",
      message:"Found user record FAILED"
    })
    }else{
      res.json({
      status:"200",
      message:"Found user record SUCCESSFULLY",
      data:users
    })
    }
  } catch (err) {
    res.json({ 
      status:"400",
      message: err 
    });
  }
});

//Update a user
router.patch("/:userId", async (req, res) => {
  try {
    // updateOne() -> update data by id
    const updateUser = await User.updateOne(
      {_id :req.params.userId},
      {
        $set : {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        about: req.body.about,
        password: req.body.password,
        passwordSalt: req.body.passwordSalt,
        email: req.body.email,
        avatarURL: req.body.avatarURL
        },
      }
    );
    if(!updateUser){
      res.json({
      status:"400",
      message:"Update user record FAILED"
    })
    }else{
      res.json({
      status:"200",
      message:"Update user record SUCCESSFULLY",
      data:updateUser
    })
    }
  } catch (err) {
    res.json({ 
      status:"400",
      message: err 
    });
  }
});

//Delete a user
router.delete("/:userId", async (req, res) => {
  try {
    // deleteOne() -> delete data by id
    const deleteUser = await User.deleteOne(
      {_id :req.params.employeeId}
    );
    if(!deleteUser){
      res.json({
      status:"400",
      message:"Delete user record FAILED"
    })
    }else{
      res.json({
      status:"200",
      message:"Delete user record SUCCESSFULLY",
      data:deleteUser
    })
    }
  } catch (err) {
    res.json({ 
      status:"400",
      message: err 
    });
  }
});

module.exports = router;