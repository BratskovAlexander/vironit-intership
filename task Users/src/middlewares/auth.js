const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const auth = async (req, res, next) => {
  try {  
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "secretKey");
    const user = await User.findOne({ _id: decoded.id });
    console.log(user);
    if (user.id !== decoded.id) {
      throw new Error();
    }
    // console.log(object);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please autentificate" });
  }
};

module.exports = auth;
