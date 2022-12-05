const express = require('express');
const router = express.Router();

const { validate, errorHandler } = require("./../middleware");

const authService = require('../services/auth');
const { body } = require("express-validator");

const email = body('email').isEmail().isLength({ max: 378 });
const password = body('password').isLength({ min: 8, max: 128 });

// POST
router.post('/auth/sign-up',
  body('roleId').isInt({ min: 1 }).toInt(),
  body('fullName').isLength({ min: 2, max: 128 }),
  email,
  password,
  validate,
  errorHandler(authService.signUp));

router.post('/auth/sign-in',
  email,
  password,
  validate,
  errorHandler(authService.signIn));

module.exports = router;
