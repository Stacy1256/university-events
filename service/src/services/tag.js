const tagRepo = require('../repositories/tag');

const tagNotFound = res =>
  res.status(404).send({ errorMessage: 'Tag not found' });

const create = async (req, res) => {
  const tag = await tagRepo.create(req.body);
  if (tag) {
    res.status(201).send(tag);
  } else {
    res.status(409).send({ errorMessage: 'Tag already exists' })
  }

}

const update = async (req, res) => {
  const tag = await tagRepo.update(req.params.id, req.body);
  if (tag) {
    res.status(204).send(tag);
  } else {
    tagNotFound(res);
  }
}

const remove = async (req, res) => {
  const { found, affectedEventsNumber } = await tagRepo.remove(req.params.id);
  if (found) {
    res.status(200).send({ affectedEventsNumber });
  } else {
    tagNotFound(res);
  }
}

const findAll = async (req, res) =>
  res.send({ items: await tagRepo.findAll(req.body) });

const findById = async (req, res) => {
  const event = await tagRepo.findById(req.params.id);
  if (event) {
    res.send(event);
  } else {
    tagNotFound(res);
  }
};

module.exports = {
  create,
  update,
  remove,
  findAll,
  findById
}
