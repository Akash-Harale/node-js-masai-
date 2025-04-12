const mongoose = require("mongoose");

const connectionToDb = mongoose.connect("mongodb+srv://akash:harale@cluster0.01kxxgp.mongodb.net/practice?retryWrites=true&w=majority&appName=Cluster0");

module.exports = { connectionToDb };
