const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { UserModel } = require("../model/user.model");

const userRouter = express.Router();

userRouter.post("/register", (req, res) => {
  const { email, password, location } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hashedPassword) => {
      const user = new UserModel({ email, password: hashedPassword, location });
      await user.save();
      res.status(200).send({ message: "registration successfull" });
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        {
          result
            ? res
                .status(200)
                .send({
                  message: "Login successfull",
                  token: jwt.sign({ data: "akash" }, "secret-key"),
                })
            : res.status(400).send({ message: "wrong credentials" });
        }
      });
    } else {
      res.status(400).send({ message: "wrong credentials" });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = {
  userRouter,
};
