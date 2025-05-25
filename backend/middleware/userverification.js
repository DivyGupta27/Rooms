require('dotenv').config();
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

const verifyUser = (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      return res.status(401).send({
        success: false,
        message: "Access denied. No token provided.",
      });
    }

    const isVerify = jwt.verify(token, secretKey);
    req.user = isVerify.id; 
    next();
  } catch (err) {
    console.error("JWT verification failed:", err);
    return res.status(401).send({
      success: false,
      message: "Invalid token",
    });
  }
};

module.exports = verifyUser;
