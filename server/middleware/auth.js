const jwt = require("jsonwebtoken");

module.exports =
  (roles = []) =>
  (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token)
      return res.status(401).json({ msg: "No token, authorization denied" });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ msg: "Forbidden" });
      }
      req.user = decoded;
      next();
    } catch (e) {
      res.status(401).json({ msg: "Token is not valid" });
    }
  };
