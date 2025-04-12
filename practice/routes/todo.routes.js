const express = require("express");
const { TodoModel } = require("../model/todo.model");

const todoRouter = express.Router();

todoRouter.get("/", async (req, res) => {
  try {
    const allTodos = await TodoModel.find();
    if (allTodos.length > 0) {
      res.status(200).send(allTodos);
    } else {
      res.status(200).send({ message: "No TODOs available" });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

todoRouter.post("/add", async (req, res) => {
  try {
    const todo = new TodoModel(req.body);
    await todo.save();
    res.status(200).send({ message: "A new todo has been added " });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
module.exports = { todoRouter };
