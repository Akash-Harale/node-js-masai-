const express = require("express");
const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

userRouter.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 5);
    if (!hashPassword)
      return res
        .status(400)
        .send({ message: "something went wrong with hashing the password" });

    const user = UserModel({ fullName, email, password: hashPassword });
    await user.save();
    res.send({ message: "registered successfully" });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

userRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return res.status(400).json({ 
        success: false,
        message: 'Email and password are required' 
      });
    }

    // Find user
    const user = await UserModel.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ 
        success: false,
        message: 'Invalid credentials' 
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ 
        success: false,
        message: 'Invalid credentials' 
      });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: '24h'
    });

    // Send response
    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ 
      success: false,
      message: 'Internal server error' 
    });
  }
});

module.exports = { userRouter };
