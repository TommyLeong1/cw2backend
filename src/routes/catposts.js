const express = require("express");
const router = express.Router();

const Employee = require("../model/Employee");

//employee permission
//----------------------------------------------------

//get all the employee
router.get("/", async (req, res) => {
  try {
    // find() -> get all data
    const employees = await Employee.find();
    if(!employees){
      res.json({
      status:"400",
      message:"Found employee records FAILED"
    })
    }else{
      res.json({
      status:"200",
      message:"Found employee records SUCCESSFULLY",
      data:employees
    })
    }
  } catch (err) {
    res.json({ 
      status:"400",
      message: err 
    });
  }
});

//save a employee(register)
router.post('/', async (req, res) => {
  const employees = await new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    about: req.body.about,
    dateRegistered: req.body.dateRegistered,
    password: req.body.password,
    passwordSalt: req.body.passwordSalt,
    email: req.body.email,
    avatarURL: req.body.avatarURL,
    signUpCode: req.body.signUpCode
  });

  try {
    const savedEmployee = await employees.save();
    if(!savedEmployee){
      res.json({
      status:"400",
      message:"Save employee FAILED"
    })
    }else{
      res.json({
      status:"200",
      message:"Save employee SUCCESSFULLY",
      data:savedEmployee
    })
    }
  } catch (err) {
    res.json({ 
      status:"400",
      message: err 
    });
  }  
});

//get a specific employee
router.get("/:employeeId", async (req, res) => {
  try {
    // findById() -> get data by id
    const employees = await       
    Employee.findById(req.params.employeeId);
    if(!employees){
      res.json({
      status:"400",
      message:"Found employee record FAILED"
    })
    }else{
      res.json({
      status:"200",
      message:"Found employee record SUCCESSFULLY",
      data:employees
    })
    }
  } catch (err) {
    res.json({ 
      status:"400",
      message: err 
    });
  }
});

//Update a employee
router.patch("/:employeeId", async (req, res) => {
  try {
    // updateOne() -> update data by id
    const updateEmployee = await Employee.updateOne(
      {_id :req.params.employeeId},
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
    if(!updateEmployee){
      res.json({
      status:"400",
      message:"Update employee record FAILED"
    })
    }else{
      res.json({
      status:"200",
      message:"Update employee record SUCCESSFULLY",
      data:updateEmployee
    })
    }
  } catch (err) {
    res.json({ 
      status:"400",
      message: err 
    });
  }
});

//Delete a employee
router.delete("/:employeeId", async (req, res) => {
  try {
    // deleteOne() -> delete data by id
    const deleteEmployee = await Employee.deleteOne(
      {_id :req.params.employeeId}
    );
    if(!deleteEmployee){
      res.json({
      status:"400",
      message:"Delete employee record FAILED"
    })
    }else{
      res.json({
      status:"200",
      message:"Delete employee record SUCCESSFULLY",
      data:deleteEmployee
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