const express = require("express");
const { TaskModel } = require("../models/tasks.models");

const taskRouter = express.Router();

taskRouter.get("/", async (req, res) => {
  const userId = req.body.userId;
  console.log(userId);
  try {
    const tasks = await TaskModel.find({ userId });
    res.send(tasks);
  } catch (error) {
    res.status(400).send({ message: "Error in fetching Tasks" });
  }
});

taskRouter.post("/add", async (req, res) => {
  try {
    const task = new TaskModel(req.body);
    await task.save();
    res.send({ message: "A new Task has been added" });
  } catch (error) {
    res.status(400).send({ message: "Error in adding a Tasks" });
  }
});

module.exports = { taskRouter };
