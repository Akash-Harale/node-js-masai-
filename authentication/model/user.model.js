const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: String,
    password: Number,
    location: String,
    age: Number,
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
