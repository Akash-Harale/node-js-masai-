const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());

// user Routes
app.use("/user", userRouter);

app.listen(port, async () => {
  try {
    await connection;
    console.log("successfully connected to database");
  } catch (error) {
    console.log("Error while connecting to database", error.message);
  }
  console.log("serve is running", port);
});
