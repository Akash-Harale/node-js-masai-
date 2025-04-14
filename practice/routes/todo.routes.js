const express = require("express");
const { TodoModel } = require("../model/todo.model");

const todoRouter = express.Router();

todoRouter.post("/add", async (req, res) => {
  try {
    const todo = new TodoModel(req.body);
    const addedTodo = await todo.save();
    if (addedTodo) res.send({ message: "A new Todo has been added" });
  } catch (error) {
    res.status(400).send({ message: "Failed to add a new TODO." });
  }
});

module.exports = { todoRouter };
