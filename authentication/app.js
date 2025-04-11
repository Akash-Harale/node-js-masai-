const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { adminRouter } = require("./routes/admin.routes");

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/admin", adminRouter);

app.listen(3000, async (req, res) => {
  try {
    await connection;
    console.log("database connected");
  } catch (error) {
    console.log("something went wrong");
  }
  console.log("server is running on port 3000");
});
