const express = require('express');
const router = express.Router();

const { body } = require('express-validator');

const { authRole, idParam, validate, errorHandler } = require("./../middleware");
const departmentService = require('../services/department');

// POST
router.post('/departments',
  authRole(2),
  body('facultyId').isInt({ min: 1 }).toInt(),
  body('name').isLength({ min: 2, max: 256 }),
  body('phone'),
  body('email').isEmail(),
  body('imageUrl').isURL().optional(),
  body('url').optional().isURL(),
  validate,
  errorHandler(departmentService.create));

// GET
router.get('/departments',
  errorHandler(departmentService.findAll));

router.get('/departments/:id',
  idParam,
  validate,
  errorHandler(departmentService.findById));

module.exports = router;
