const express = require("express");
const { UserModel } = require("../model/user.model");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(200).send({ message: "registration successfull" });
  } catch (error) {
    res.status(400).send({ message: "something went wrong" });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email, password });
    {
      user.length > 0
        ? res.send({
            message: "login successfull",
            token: jwt.sign({ data: "akshvharale" }, "secret-key"),
          })
        : res.send({ message: "wrong credentials" });
    }
  } catch (error) {
    res.status(400).send({ message: "something went wrong" });
  }
});

module.exports = {
  userRouter,
};
