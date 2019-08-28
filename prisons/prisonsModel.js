const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findById,
  findByName, 
  update, 
  remove
};

function findByName(name) {
  return db("prisons")
    .where("name", name)
    .first();
}

function find() {
  return db("prisons").select("id", "name", "address");
}

function findById(id) {
  return db("prisons")
    .where("id", id)
    .first();
}

async function add(prison) {
  const [id] = await db("prisons").insert(prison);

  return findById(id);
}

async function update(changes, id) {
  await db("prisons")
    .where({ id })
    .update(changes);
  return findById(id);
}

async function remove(id) {
  const delPrison = await findById(id);
  const del_ = await db("prisons")
    .where({ id })
    .del();
  return del_ ? delPrison : null;
}
