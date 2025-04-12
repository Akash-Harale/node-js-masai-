const express = require("express");
const { NoteModel } = require("../model/note.model");

const noteRouter = express.Router();

noteRouter.get("/", async (req, res) => {
  try {
    const notes = await NoteModel.find();
    res.status(200).send(notes);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

noteRouter.post("/add", async (req, res) => {
  try {
    const note = new NoteModel(req.body);
    await note.save();
    res.status(200).send({ message: "A new note has been added." });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

noteRouter.patch("/update/:noteId", (req, res) => {
  //lgoic
});

noteRouter.delete("/delete/:not", (req, res) => {
  //lgoic
});

module.exports = {
  noteRouter,
};
