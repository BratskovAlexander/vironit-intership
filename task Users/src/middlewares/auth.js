const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "secretKey");
    const user = await User.findOne({ login: req.params.login });
    if (user.id !== decoded.id) {
      throw new Error();
    }
    next();
  } catch (error) {
    res.status(401).send({ error: "Please autentificate" });
  }
};

module.exports = auth;
