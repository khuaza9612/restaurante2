const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (!authHeader) return res.status(401).json('No estás autenticado!');

  jwt.verify(authHeader, process.env.JWT_SECRET, (err, client) => {
    if (err) return res.status(403).json('Token no válido');
    req.client = client;
    next();
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.client.id === req.params.id || req.client.isAdmin) {
      next();
    } else {
      res.status(403).json('No tienes permitido hacer eso!');
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAdmin
};
