const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

const auth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) return res.status(400).send({ message: err.message });
      if (decoded) {
        req.body.userId = decoded.userId;
        next();
      }
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = { auth };
