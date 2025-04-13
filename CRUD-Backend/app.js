const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { noteRouter } = require("./routes/note.routes");
const { auth } = require("./middleware/auth.middleware");
const cors = require("cors");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
// users routes
app.use("/users", userRouter);
// auth middleware
app.use(auth);
// notes routes
app.use("/notes", noteRouter);

app.listen(4000, async () => {
  try {
    await connection;
    console.log("Database connected successfully");
  } catch (error) {
    console.log("something went wrong, Database not connected");
  }
  console.log("server is running on port 4000");
});
