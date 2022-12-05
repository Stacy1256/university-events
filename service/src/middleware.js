const jwt = require('jsonwebtoken');
const { validationResult, param } = require('express-validator');

const JWT_SECRET = process.env.JWT_SECRET || 'lnu-events';

const AUTH_TOKEN_HEADER = "Authorization";
const TOKEN_PREFIX = "Bearer";

const sign = payload => jwt.sign(payload, JWT_SECRET);

const authRole = (minRequiredRole = 1) => (req, res, next) => {
  const authHeader = req.header(AUTH_TOKEN_HEADER);

  if (!authHeader) {
    res.status(401).send({ errorMessage: 'Missed Authorization header' });
    return;
  }

  const authHeaderParts = authHeader.split(' ');
  if (authHeaderParts.length !== 2 || TOKEN_PREFIX !== authHeaderParts[0]) {
    res.status(401).send({ errorMessage: 'Invalid format of Auth header' });
    return;
  }

  const token = authHeaderParts[1];

  try {
    jwt.verify(token, JWT_SECRET);
  } catch (e) {
    res.status(401).send({ errorMessage: 'Invalid Auth token' });
    return;
  }

  const { userId, roleId } = jwt.decode(token);

  if (roleId < minRequiredRole) {
    res.status(403).send({ errorMessage: 'Forbidden for your role' });
    return;
  }

  req.user = { id: userId, roleId };

  next();
}

const auth = authRole(1);

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
}

const idParam = param('id').isInt({ min: 1 }).toInt();

const errorHandler = routerCallBack => {
  return async (req, res, next) => {
    try {
      await routerCallBack(req, res, next);
    } catch (e) {
      console.log(e);
      res.status(500).send({ errorMessage: `${e}` });
    }
  }
};

module.exports = {
  sign,
  authRole,
  auth,
  validate,
  idParam,
  errorHandler
};
