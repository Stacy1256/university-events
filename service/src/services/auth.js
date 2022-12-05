const userRepo = require('./../repositories/user');
const bcrypt = require('bcrypt');
const { sign } = require('../middleware');

const salt = bcrypt.genSaltSync(10);

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await userRepo.findAuthDataByEmail(email);

  if (!user) {
    res.status(401).send({ errorMessage: 'Unauthorized' });
  }

  const isMatch = bcrypt.compareSync(password, user.passwordHash);

  if (isMatch) {
    res.send({ token: sign({ userId: user.id, roleId: user.roleId }) });
  } else {
    res.status(401).send({ errorMessage: 'Unauthorized' });
  }
}

const signUp = async (req, res) => {
  const passwordHash = bcrypt.hashSync(req.body.password, salt);

  const user = await userRepo.create({ ...req.body, passwordHash });
  if (!user) {
    res.status(409).send({ errorMessage: "User with such email already exists" });
  } else {
    res.status(201).send(user);
  }
}

module.exports = {
  signIn,
  signUp
}