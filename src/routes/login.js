const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require("../model/Admin");
const Employee = require("../model/Employee");
const User = require("../model/User");

router.post('/login', async (req, res) => {
  const { username, password, role } = req.body;

  try {
    let user;

    // 根据角色查找用户
    switch (role) {
      case 'admin':
        user = await Admin.findOne({ username });
        break;
      case 'employee':
        user = await Employee.findOne({ username });
        break;
      case 'user':
        user = await User.findOne({ username });
        break;
      default:
        return res.status(401).json({ message: 'Invalid role' });
    }

    // 验证用户和密码
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // 生成 JWT token
    const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET);

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;