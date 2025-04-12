const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { noteRouter } = require("./routes/note.routes");
const { auth } = require("./middleware/auth.middleware");

const app = express();

// middlewares
app.use(express.json());
app.use("/users", userRouter);
app.use(auth);
app.use("/notes", noteRouter);
app.listen(4000, async (req, res) => {
  try {
    await connection;
    console.log("Database connected successfully");
  } catch (error) {
    console.log("something went wrong, Database not connected");
  }
  console.log("server is running on port 4000");
});
