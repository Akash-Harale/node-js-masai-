const express = require("express");
const { connectionToDb } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { auth } = require("./middlewares/auth.middleware");
const { todoRouter } = require("./routes/todo.routes");

const app = express();

//middlewares
app.use(express.json());
// user routes
app.use("/user", userRouter);
// auth middleware
app.use(auth);
// Todo routes
app.use("/todo", todoRouter);

app.listen(4000, async (req, res) => {
  try {
    await connectionToDb;
    console.log("Connected to database.");
  } catch (error) {
    console.log(`Unable to connect with database - ${error.message}`);
  }
  console.log(`server is running on port 4000`);
});
