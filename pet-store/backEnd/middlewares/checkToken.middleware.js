const jwt = require("jsonwebtoken");
require('dotenv').config();

exports.checkTokenMiddleware = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).json({ message: "Authorization token missing" });
    }
    var decoded = await jwt.verify(token, process.env.jwt_Secret);
      req.userId = decoded.id
      req.role = decoded.role
    return next();
  } catch (error) {
    console.error(error);
    return res.status(401).json(error);
  }
};
