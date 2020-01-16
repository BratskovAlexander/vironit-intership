const jwt = require("jsonwebtoken");

const checkToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "secretKey");
    console.log("тут декодед",decoded);
    req.decoded = decoded;
    next();
  } catch (error) {
    console.log("opss");
    console.log(error.message);
    res
      .status(401)
      .send({ error: "Error in checktoken. Please get new access-token" });
  }
};

module.exports = checkToken;
