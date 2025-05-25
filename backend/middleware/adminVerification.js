require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../Models/user.model');

const secretKey = process.env.SECRET_KEY;

const verifyAdmin = async (req, res, next) => {
  try {
    const token = req.header("auth-token");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
      });
    }

    const decoded = jwt.verify(token, secretKey);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    if (!user.isAdmin) {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admins only.",
      });
    }

    req.user = user;
    next();

  } catch (error) {
    console.error("Admin verification error:", error.message);
    return res.status(401).json({
      success: false,
      message: "Unauthorized access.",
    });
  }
};

module.exports = verifyAdmin;
