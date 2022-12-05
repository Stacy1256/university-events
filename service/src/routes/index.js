const authRouter = require('./auth');
const eventsRouter = require('./event');
const departmentsRouter = require('./department');
const facultyRouter = require('./faculty');
const tagRouter = require('./tag');

const API_ROOT_URI = '/api';

const initRouters = app => {
  app.use(API_ROOT_URI,
    authRouter,
    eventsRouter,
    departmentsRouter,
    facultyRouter,
    tagRouter);
}

module.exports = {
  initRouters
}
