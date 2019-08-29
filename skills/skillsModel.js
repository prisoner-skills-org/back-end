const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findById,
  findBySkill,
  update,
  remove
};

function findBySkill(skill) {
  return db("skills")
    .where("skill", skill)
    .first();
}

function find() {
  return db("skills").select(
    "id",
    "name",
    "prisoner_id"
  );
}

function findById(id) {
  return db("skills")
    .where("id", id)
    .first();
}

async function add(skill) {
  const [id] = await db("skills").insert(skill);

  return findById(id);
}

async function update(changes, id) {
  await db("skills")
    .where({ id })
    .update(changes);
  return findById(id);
}

async function remove(id) {
  const delSkill = await findById(id);
  const del_ = await db("skills")
    .where({ id })
    .del();
  return del_ ? delSkill : null;
}
