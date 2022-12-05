const { db } = require("./db");

const create = async ({ creatorUserId, title, description, imageUrl, departmentId, startsAt, endsAt, tags }) => {
  const trx = await db.transaction();

  try {
    const [{ id, createdAt }] = await trx.insert({
      creator_user_id: creatorUserId,
      title,
      description,
      image_url: imageUrl,
      department_id: departmentId,
      starts_at: startsAt,
      ends_at: endsAt
    }, ['id', 'created_at as createdAt'])
      .into('events.event');

    if (tags && tags.length > 0) {
      const event_tags = tags.map(tagId => ({
        tag_id: tagId,
        event_id: id
      }));

      await trx.insert(event_tags)
        .into('events.event_tag');
    }

    await trx.commit();

    return {
      id,
      creatorUserId,
      title,
      description,
      imageUrl,
      departmentId,
      startsAt,
      endsAt,
      tags,
      createdAt
    }

  } catch (e) {
    await trx.rollback();
    console.log(e);
  }
};

const setDiff = (a, b) => {
  const diff = new Set(a);
  for (const item of b) {
    diff.delete(b);
  }
  return diff;
}

const update = async (id, { title, description, imageUrl, departmentId, startsAt, endsAt, tags }) => {
  const trx = await db.transaction();

  try {
    const updated = await trx('events.event')
      .where('id', '=', id)
      .update({ title, description, imageUrl, departmentId, startsAt, endsAt });

    if (updated < 1) {
      return;
    }

    const newTags = new Set(tags);
    const oldTags = new Set(await trx('events.event_tag')
      .select(['event_id', 'tag_id'])
      .where('event_id', '=', id));

    const tagsRemoved = await trx('events.event_tag')
      .whereIn('tag_id', Array.from(setDiff(oldTags, newTags)))
      .andWhere('event_id', '=', id)
      .del();

    const toInsert = Array.from(setDiff(newTags, oldTags))
      .map(tag_id => ({ event_id: id, tag_id }))
    const tagsAdded = await trx('events.event_tag')
      .insert(toInsert);

    const { creatorUserId, createdAt } = await trx('events.event')
      .select(['creator_user_id as creatorUserId', 'created_at as createdAt'])
      .where('id', '=', id)
      .first();

    await trx.commit();

    return {
      event: {
        id,
        creatorUserId,
        title,
        description,
        imageUrl,
        departmentId,
        startsAt,
        endsAt,
        tags,
        createdAt
      },
      tagsAdded,
      tagsRemoved
    }
  } catch (e) {
    await trx.rollback();
    console.log(e);
  }
}

const remove = async id => {
  const trx = await db.transaction();

  try {
    const eventTagsDeleted = await trx('events.event_tag')
      .where('event_id', '=', id)
      .del();

    const eventsDeleted = await trx('event.event')
      .where('id', '=', id)
      .del();

    if (eventsDeleted < 1) {
      return;
    }

    await trx.commit();

    return {
      eventTagsDeleted
    }
  } catch (e) {
    await trx.rollback();
    console.log(e);
  }
}

const reduceTags = events => {
  return Array.from(events.reduce((result, row) => {
    if (!result.has(row.id)) {
      result.set(row.id, {
        id: row.id,
        creatorUserId: row.creatorUserId,
        title: row.title,
        description: row.description,
        imageUrl: row.imageUrl,
        department: {
          id: row.departmentId,
          name: row.departmentName,
          phone: row.departmentPhone,
          email: row.departmentEmail,
          imageUrl: row.departmentImageUrl,
          url: row.departmentUrl,
          faculty: {
            id: row.facultyId,
            name: row.facultyName,
            address: row.facultyAddress,
            phone: row.facultyPhone,
            email: row.facultyEmail,
            url: row.facultyUrl
          }
        },
        startsAt: row.startsAt,
        endsAt: row.endsAt,
        tags: [],
        createdAt: row.createdAt
      });
    }
    row.tagId && result.get(row.id).tags.push({ id: row.tagId, name: row.tagName, color: row.tagColor });
    return result;
  }, new Map()).values());
}

const fetchAll = () =>
  db({ e: 'events.event' })
    .leftJoin('departments.department as d', 'e.department_id', '=', 'd.id')
    .leftJoin('departments.faculty as f', 'd.faculty_id', '=', 'f.id')
    .leftJoin('events.event_tag as et', 'e.id', '=', 'et.event_id')
    .leftJoin('events.tag as t', 'et.tag_id', '=', 't.id')
    .select([
      'e.id',
      'e.creator_user_id as creatorUserId',
      'e.title',
      'e.description',
      'e.image_url as imageUrl',
      'e.department_id as departmentId',
      'd.name as departmentName',
      'd.phone as departmentImageUrlPhone',
      'd.email as departmentImageUrlEmail',
      'd.image_url as departmentImageUrl',
      'd.url as departmentUrl',
      'f.id as facultyId',
      'f.name as facultyName',
      'f.address as facultyAddress',
      'f.phone as facultyPhone',
      'f.email as facultyEmail',
      'f.image_url as facultyImageUrl',
      'f.url as facultyUrl',
      't.id as tagId',
      't.name as tagName',
      't.color as tagColor',
      'e.starts_at as startsAt',
      'e.ends_at as endsAt',
      'e.created_at as createdAt'
    ]);

const findAll = async ({ from, to, departments, faculties, tags }) => {
  const flat = await fetchAll()
    .modify(b => {
      from && b.where('ends_at', '>=', from);
      to && b.where('starts_at', '<=', to);
      departments && departments.length > 0 && b.whereIn('department_id', departments);
      faculties && faculties.length > 0 && b.whereIn('faculty_id', faculties);
      tags && b.whereIn('e.id', function () {
        this.select('et.event_id')
          .from('events.event_tag as et')
          .innerJoin('events.tag as t', 't.id', '=', 'et.tag_id')
          .whereIn('t.name', tags)
      });
    });
  return reduceTags(flat);
}

const findById = async id => {
  const flatEvent = await fetchAll()
    .where('e.id', id);
  return flatEvent && flatEvent.length && reduceTags(flatEvent)[0];
}

const findTagsByEventId = async id => {
  const event = await db('events.event')
    .select('id')
    .where('id', '=', id);

  if (!event) {
    return;
  }

  return db({ et: 'events.event_tag' })
    .innerJoin('events.tag as t', 't.id', '=', 'et.tag_id')
    .where('et.event_id', '=', id)
    .select(['t.id', 't.name', 't.color']);
}

const findCreatorUserIdByEventId = id =>
  db('events.event')
    .select('creator_user_id as creatorUserId')
    .where('id', '=', id)
    .first();

module.exports = {
  create,
  update,
  remove,
  findAll,
  findById,
  findTagsByEventId,
  findCreatorUserIdByEventId
}
