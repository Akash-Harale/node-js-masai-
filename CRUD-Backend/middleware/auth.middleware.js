const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  console.log(req);
  const token = req.headers.authorization;
  if (token) {
    try {
      jwt.verify(token, "secret-key");
      next();
    } catch (error) {
      res.status(400).send({ message: "please lgoin from try catch block" });
    }
  } else {
    res.status(400).send({ message: "Please login " });
  }
};

module.exports = { auth };
