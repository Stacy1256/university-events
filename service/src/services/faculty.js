const facultyRepo = require('../repositories/faculty');

const create = async (req, res) => {
  const faculty = await facultyRepo.create(req.body);
  if (faculty) {
    res.send(faculty);
  } else {
    res.status(409).send({ errorMessage: "Faculty already exists" });
  }
}

const findAll = async (req, res) =>
  res.send(await facultyRepo.findAll());

const findById = async (req, res) => {
  const tag = await facultyRepo.findById(req.params.id);
  if (tag) {
    res.send(tag);
  } else {
    res.status(404).send({ errorMessage: "Tag not found" });
  }
}

module.exports = {
  create,
  findAll,
  findById
}
