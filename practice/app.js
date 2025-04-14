const eexpress = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { todoRouter } = require("./routes/todo.routes");
const { auth } = require("./middlewares/auth.middleware");
require("dotenv").config();

const port = process.env.PORT;
const app = eexpress();

app.use(eexpress.json());

//routes
app.use("/user", userRouter);
app.use(auth);
app.use("/todo", todoRouter);

app.listen(port, async () => {
  try {
    await connection;
    console.log("successfully connected with database");
  } catch (error) {
    console.log("failed to connect database");
  }
  console.log("server is running on port ", port);
});
