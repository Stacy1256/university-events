const express = require('express');
const router = express.Router();

const { body, query, oneOf } = require('express-validator');

const { auth, validate, idParam, errorHandler } = require("./../middleware");
const eventService = require('../services/event');

// validators & sanitizers
const title = body('title').isLength({ min: 2, max: 128 });
const description = body('description').isLength({ min: 0, max: 999 });
const imageUrl = body('imageUrl').isURL();
const departmentId = body('departmentId').isInt({ min: 1 }).toInt();
const startsAt = body(['startsAt']).isISO8601().toDate();
const endsAt = body(['endsAt']).isISO8601().toDate();
const tags = body('tags').isArray()
const tag = body('tags.*').isInt({ min: 1 }).toInt();

// POST
router.post('/events',
  auth,
  title,
  description,
  imageUrl.optional(),
  departmentId,
  startsAt,
  endsAt,
  tags,
  tag,
  validate,
  errorHandler(eventService.create));

// PUT
router.put('/events/:id',
  auth,
  idParam,
  validate,
  eventService.onlyEventCreator('edit'),
  oneOf([
    title,
    description,
    imageUrl,
    departmentId,
    startsAt,
    endsAt,
    tags,
    tag
  ]),
  validate,
  errorHandler(eventService.update));

// DELETE
router.delete('/events/:id',
  auth,
  idParam,
  validate,
  eventService.onlyEventCreator('delete'),
  errorHandler(eventService.remove));

// GET
router.get('/events',
  query(['from', 'to']).optional().isISO8601(),
  query(['departments', 'faculties', 'tags']).optional().customSanitizer((value, _) => value.split(',')),
  validate,
  errorHandler(eventService.findAll));

router.get('/events/:id',
  idParam,
  validate,
  errorHandler(eventService.findById));

router.get('/events/:id/tags',
  idParam,
  validate,
  errorHandler(eventService.findTagsByEventId));

module.exports = router;
