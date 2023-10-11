const checkToken = async (token) => {
  try {
    var decoded = jwt.verify(token, process.env.jwt_Secret);
    return decoded;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.checkTokenMiddleware = async (req, res, next) => {
  try {
    const decoded = await checkToken(req.headers["authorization"]);
    res.json(decoded)
    return next();
  } catch (error) {
    return res.status(401).json(error);
  }
};
