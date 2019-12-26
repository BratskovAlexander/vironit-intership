const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "secretKey");
    const user = await User.findOne({ _id: decoded.id });
    if (user.id !== decoded.id) {
      throw new Error();
    }
    req.user = user;
    next();
  } catch (error) {
    if (error.message === "jwt expired") {
      res.status(401).send({ msg: "Please, get new jwt" });
    }
    res
      .status(401)
      .send({ msg: "Please autentificate", code: "INVALID_CREDENTIALS" });
  }
};

module.exports = auth;
