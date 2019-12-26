const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const checkToken = async (req, res, next) => {
  try { 
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "secretKey");
    req.decoded = decoded
    next();
  } catch (error) {
    res.status(401).send({ error: "Please autentificate" });
  }
};

module.exports = checkToken;
