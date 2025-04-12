const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    jwt.verify(token, "secret-key");

    next();
  } catch (error) {
    res.status(400).send({
      message: `${error.message} inside catch block of auth middleware`,
    });
  }
};

module.exports = { auth };
