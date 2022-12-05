const { db } = require("./db");

const create = ({ name, address, phone, email, imageUrl, url }) => {
  try {
    return db('departments.faculty')
      .insert({ name, address, phone, email, imageUrl, url }, 'id');
  } catch (e) {
    console.log(e);
  }
}

const reduceDepartments = faculties =>
  Array.from(faculties.reduce((result, row) => {
    if (!result.has(row.id)) {
      result.set(row.id, {
        id: row.id,
        name: row.name,
        address: row.address,
        phone: row.phone,
        email: row.email,
        imageUrl: row.imageUrl,
        url: row.url,
        departments: []
      });
    }
    row.departmentId && result.get(row.id).departments.push({
      id: row.departmentId,
      name: row.departmentName,
      phone: row.departmentPhone,
      email: row.departmentEmail,
      imageUrl: row.departmentImageUrl,
      url: row.departmentUrl
    });
    return result;
  }, new Map()).values());

const fetchAll = () =>
  db({ f: 'departments.faculty' })
    .leftJoin('departments.department as d', 'd.faculty_id', '=', 'f.id')
    .select([
      'f.id',
      'f.name',
      'f.address',
      'f.phone',
      'f.email',
      'f.image_url as imageUrl',
      'f.url',
      'd.id as departmentId',
      'd.name as departmentName',
      'd.phone as departmentPhone',
      'd.email as departmentEmail',
      'd.image_url as departmentImageUrl',
      'd.url as departmentUrl'
    ]);

const findAll = async () => {
  const faculties = await fetchAll();
  return reduceDepartments(faculties);
}

const findById = async id => {
  const faculties = await fetchAll()
    .where('f.id', '=', id);
  return faculties && faculties.length && reduceDepartments(faculties)[0];
}

module.exports = {
  create,
  findAll,
  findById
}