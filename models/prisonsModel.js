const bcrypt = require("bcryptjs");
const db = require("../database/dbConfig");

module.exports = {
  add,
  get,
  getAll,
  findBy,
  update,
  remove
};

const prisons = "prisons";

function add(prison) {
  const password = bcrypt.hashSync(prison.password, 4);
  return db(prisons).insert({ ...prison, password }, ["id"]);
}

function get(id) {
  return db(prisons)
    .where({ id })
    .first();
}

function getAll() {
  return db(prisons);
}

function findBy(filter) {
  return db(prisons)
    .where(filter)
    .first();
}

function update(id, update) {
  if (update.password) {
    update.password = bcrypt.hashSync(update.password, 4);
  }
  return db(prisons)
    .where({ id })
    .update(update);
}

function remove(id) {
  return db(prisons)
    .where({ id })
    .del();
}
