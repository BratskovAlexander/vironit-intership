const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "secret.key");
    const user = await User.findOne({ login: req.params.login });
    if (user.login !== decoded.login) {
      throw new Error();
    }
    next();
  } catch (error) {
    res.status(401).send({error: 'Please autentificate'})
  }
};

module.exports = auth;
