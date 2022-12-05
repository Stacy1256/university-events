const express = require('express');
const router = express.Router();
const { body, oneOf } = require('express-validator');

const { errorHandler } = require("./../middleware");
const { auth, authRole, validate, idParam } = require("../middleware");
const tagService = require('../services/tag');

// validators & sanitizers
const name = body('name').isLength({ min: 2, max: 64 });
const color = body('color').isHexColor();

// POST
router.post('/tags',
  authRole(2),
  name,
  color,
  validate,
  errorHandler(tagService.create));

// PUT
router.put('/tags/:id',
  authRole(2),
  idParam,
  oneOf([name, color]),
  validate,
  errorHandler(tagService.update));

// GET
router.get('/tags/:id',
  idParam,
  validate,
  errorHandler(tagService.findById));

router.get('/tags',
  errorHandler(tagService.findAll));

module.exports = router;
