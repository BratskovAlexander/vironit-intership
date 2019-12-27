const jwt = require("jsonwebtoken");

const checkToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "secretKey");
    req.decoded = decoded;
    next();
  } catch (error) {
    console.log(error.message);
    res
      .status(401)
      .send({ error: "Error in checktoken. Please get new access-token" });
  }
};

module.exports = checkToken;
