const { db } = require("./db");

const TABLE = 'events.tag';

const create = async ({ name, color }) => {
  try {
    const [tag] = await db(TABLE).insert({ name, color, }, '*');
    return tag;
  } catch (e) {
    console.log(e);
  }
}

const update = async (id, { name, color }) => {
  const inserted = await db(TABLE)
    .where('id', '=', id)
    .update({ name, color });
  return (inserted > 0) && { id, name, color };
}

const remove = async id => {
  const trx = await db.transaction();

  try {
    const affectedEventsNumber = await trx('events.event_tag')
      .where('tag_id', '=', id)
      .del();

    const n = await trx(TABLE)
      .where('id', '=', id)
      .del();

    await trx.commit();

    return { found: n > 0, affectedEventsNumber };
  } catch (e) {
    await trx.rollback();
    console.log(e);
  }
}

const findAll = ({ keyword } = {}) =>
  db({ t: TABLE })
    .select(['id', 'name', 'color'])
    .modify(b => {
      keyword && b.whereILike('name', `%${keyword}%`);
    });

const findById = id =>
  findAll()
    .where({ id })
    .first();

module.exports = {
  create,
  update,
  remove,
  findAll,
  findById
}
