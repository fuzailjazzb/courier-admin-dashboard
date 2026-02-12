const express = require("express");
const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

/* Create Default Admin (Run Once) */
router.get("/create", async (req, res) => {
  const admin = await Admin.create({
    email: "admin@gmail.com",
    password: "123456"
  });

  res.json({
    msg: "Admin Created ✅",
    admin
  });
});

/* Admin Login */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(400).json({ msg: "Admin Not Found ❌" });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(400).json({ msg: "Wrong Password ❌" });

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
    expiresIn: "1d"
  });

  res.json({
    msg: "Login Success ✅",
    token
  });
});

module.exports = router;
