const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require("../model/Admin");
const Employee = require("../model/Employee");
const User = require("../model/User");

router.post('/', async (req, res) => {
  const { username, password, role } = req.body;

  try {
    let user;

    //choose role
    switch (role) {
      case 'admin':
        user = await Admin.findOne({ where: {username }})
        break;
      case 'employee':
        user = await Employee.findOne({ where: {username }})
        break;
      case 'user':
        user = await User.findOne({ where: {username }})
        break;
      default:
        return res.status(401).json({ message: 'Invalid role' });
    }
    //verify user password
    if (!user) {
      return res.status(401).json({ message: 'Invalid username' });
    }else if (!await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    //generate token
    const token = jwt.sign({ id: user._id, username: iser.username }, process.env.JWT_SECRET);

    res.json({ message:"Welcome Back!", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;