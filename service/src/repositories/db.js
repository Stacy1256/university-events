const Knex = require('knex');

const db = new Knex({
  client: 'pg',
  connection: process.env.PG_CONN_URL || 'postgres://postgres:postgres@localhost:5432/lnu_events'
});

module.exports = {
  db
};
