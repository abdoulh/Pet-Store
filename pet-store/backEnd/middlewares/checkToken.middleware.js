const jwt = require("jsonwebtoken");
require('dotenv').config();

exports.checkTokenMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  console.log(authHeader);
    if (token) {
      var decoded = await jwt.verify(token, process.env.jwt_Secret);
      req.userId = decoded.id;
      req.role = decoded.role;
    }else{
      return res.status(401).json({ message: "Authorization token missing" });
    }
  } catch (error) {
    console.error(error);
    return res.status(401).json(error);
  }
};
