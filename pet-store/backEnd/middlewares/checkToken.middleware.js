const jwt = require("jsonwebtoken");
require('dotenv').config();

exports.checkTokenMiddleware = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Authorization token missing" });
    }

    var decoded = await jwt.verify(token, process.env.jwt_Secret);
    req.userId = decoded.id;
    req.role = decoded.role;


    const allowedRoles = ["customer"]; 

    if (allowedRoles.includes(req.role)) {
      console.log('qsqssfsqfsqfqsfq');
      return next(); 
    } else {
      return res.status(403).json({ message: 'Access denied' });
    }
  } catch (error) {
    console.error(error);
    return res.status(401).json(error);
  }
};
