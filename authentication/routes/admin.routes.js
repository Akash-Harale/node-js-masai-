const express = require("express");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/user.model");

const adminRouter = express.Router();

adminRouter.get("/allusers", (req, res) => {
  const token = req.headers.authorization;

  try {
    //verifying the token
    jwt.verify(token, "secret-key", async (err, decoded) => {
      if (err) return res.status(400).send(err.message);
      //fetching all users
      const users = await UserModel.find();
      res.status(200).send(users);
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = {
  adminRouter,
};
