const { db } = require("./db");

const create = async ({ roleId, fullName, email, passwordHash }) => {
  try {
    const [{ id, createdAt }] = await db('users.user')
      .insert({ role_id: roleId, full_name: fullName, email, password_hash: passwordHash },
        ['id', 'created_at as createdAt']);
    return {
      id,
      roleId,
      fullName,
      email,
      createdAt
    };
  } catch (e) {
    console.log(e);
  }
}

const findAuthDataByEmail = email =>
  db('users.user')
    .select(['id', 'password_hash as passwordHash'])
    .where({ email })
    .first();

module.exports = {
  create, findAuthDataByEmail
}
