const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://akash:harale@cluster0.01kxxgp.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0"
);

module.exports = {
  connection,
};
