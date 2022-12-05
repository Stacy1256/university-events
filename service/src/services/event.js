const eventRepo = require('../repositories/event');

const eventNotFound = res =>
  res.status(404).send({ errorMessage: "Event not found" });

// middleware
const onlyEventCreator = actionName => async (req, res, next) => {
  const { creatorUserId } = await eventRepo.findCreatorUserIdByEventId(req.params.id);

  if (!creatorUserId) {
    eventNotFound(res);
  }

  if (creatorUserId !== req.user.id) {
    res.status(401).send({ errorMessage: `Only the creator of an event can ${actionName} that event` });
  }

  next();
}

const create = async (req, res) => {
  const creatorUserId = req.user.id;
  const event = await eventRepo.create({ creatorUserId, ...req.body });
  if (event) {
    res.status(201).send(event);
  } else {
    res.status(409).send({ errorMessage: "Failed to create such event" });
  }

}

const update = async (req, res) => {
  const result = await eventRepo.update(req.params.id, req.body)
  if (result) {
    res.status(204).send(result);
  } else {
    eventNotFound(res);
  }
}

const remove = async (req, res) => {
  const result = await eventRepo.remove(req.params.id);
  if (result) {
    res.status(204).send(result);
  } else {
    eventNotFound(res);
  }
}

const findAll = async (req, res) =>
  res.send({ items: await eventRepo.findAll(req.query) });

const findById = async (req, res) => {
  const event = await eventRepo.findById(req.params.id);
  if (event) {
    res.send(event);
  } else {
    eventNotFound(res);
  }
}

const findTagsByEventId = async (req, res) => {
  const tags = await eventRepo.findTagsByEventId(req.params.id);
  if (tags) {
    res.send({ items: tags });
  } else {
    eventNotFound(res);
  }
}

module.exports = {
  create,
  onlyEventCreator,
  update,
  remove,
  findAll,
  findById,
  findTagsByEventId
}
