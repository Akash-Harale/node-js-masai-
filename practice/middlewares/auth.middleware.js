const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authToken = req.headers.authorization;
  if (authToken) {
    try {
      const decoded = jwt.verify(authToken, "secret-key");
      req.body.userId = decoded.userId;
      next();
    } catch (error) {
      res
        .status(400)
        .send({ message: "Error while decoding the token, Login again" });
    }
  } else {
    res.status(400).send({ message: "please Login" });
  }
};

module.exports = { auth };
