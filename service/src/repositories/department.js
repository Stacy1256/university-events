const { db } = require("./db");

const create = ({ facultyId, name, phone, email, imageUrl, url }) => {
  try {
    return db('departments.department')
      .insert({ faculty_id: facultyId, name, phone, email, image_url: imageUrl, url },
        'id');
  } catch (e) {
    console.log(e);
  }
}

const fetchAll = () =>
  db({ d: 'departments.department' })
    .innerJoin('departments.faculty as f', 'f.id', '=', 'd.faculty_id')
    .select([
      'd.id',
      'd.name',
      'd.phone',
      'd.email',
      'd.image_url as imageUrl',
      'd.url',
      'f.id as facultyId',
      'f.name as facultyName',
      'f.address as facultyAddress',
      'f.phone as facultyPhone',
      'f.email as facultyEmail',
      'f.image_url as facultyImageUrl',
      'f.url as facultyUrl'
    ]);

const nestFaculty = ({ id, name, phone, email, imageUrl, url, ...faculty }) =>
  ({
    id,
    name,
    phone,
    email,
    imageUrl,
    url,
    faculty: {
      id: faculty.facultyId,
      name: faculty.facultyName,
      address: faculty.facultyAddress,
      phone: faculty.facultyPhone,
      email: faculty.facultyEmail,
      imageUrl: faculty.facultyImageUrl,
      url: faculty.facultyUrl
    }
  });

const findAll = async () =>
  (await fetchAll()).map(nestFaculty)

const findById = async id => {
  const department = await fetchAll()
    .where('d.id', id)
    .first();
  return department && nestFaculty(department);
}

module.exports = {
  create,
  findAll,
  findById
}
