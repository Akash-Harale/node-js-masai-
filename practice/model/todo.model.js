const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
});

const TodoModel = mongoose.model("todo", todoSchema);

module.exports = { TodoModel };
