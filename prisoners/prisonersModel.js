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
  return db("prisoners")
    .where("name", name)
    .first();
}

function find() {
  return db("prisoners").select("id", "name", "gender", "canHaveWorkLeave", "skills", "prison_id");
}

function findById(id) {
  return db("prisoners")
    .where("id", id)
    .first();
}

async function add(prisoner) {
  const [id] = await db("prisoners").insert(prisoner);

  return findById(id);
}

async function update(changes, id) {
  await db("prisoners")
    .where({ id })
    .update(changes);
  return findById(id);
}

async function remove(id) {
  const delPrison = await findById(id);
  const del_ = await db("prisoners")
    .where({ id })
    .del();
  return del_ ? delPrisoner : null;
}
