const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../model/user.model");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");

userRouter.post("/register", async (req, res) => {
  const { email, password, age, locaiton } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        return res.status(400).send({ message: err.message });
      }
      const user = await new UserModel({
        email,
        password: hash,
        age,
        locaiton,
      });
      await user.save();
      res.status(200).send({ message: "registration successfull" });
    });
  } catch (error) {
    res
      .status(400)
      .send({ message: "something went wrong", error: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });

    if (user.length > 0) {
      // checking the password is correct or not
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (err) return res.status(400).send({ message: err.message });
        if (result) {
          var token = jwt.sign({ data: "akash" }, "secret-key");
          res.status(200).send({ message: "lgoin successfull", token: token });
        } else {
          res.status(400).send({ message: "password is wrong" });
        }
      });
    } else {
      res.status(400).send({ message: "wrong credentials" });
    }
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

module.exports = {
  userRouter,
};
