const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/user.model");

const userRouter = express.Router();

userRouter.post("/register", (req, res) => {
  const { fullName, email, password } = req.body;
  bcrypt.hash(password, 5, async (err, hashPassword) => {
    try {
      if (err) return res.status(400).send({ message: err.message });

      const user = UserModel({ fullName, email, password: hashPassword });
      await user.save();
      res.send({ message: "Successfully reigstered" });
    } catch (error) {
      res
        .status(400)
        .send({ message: "Error while registering, please try again" });
    }
  });
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (!user) return res.status(400).send({ message: "user not found" });

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) return res.status(400).send({ message: err.message });
      if (!result) return res.status(400).send({ message: "Wrong Passwrod" });

      res.status(400).send({ message: "Login successfull" });
    });
  } catch (error) {
    res
      .status(400)
      .send({ message: "Error while Logging in", error: error.message });
  }
});

module.exports = {
  userRouter,
};
